import { createSlice } from '@reduxjs/toolkit'
import { UserByAccessToken, UserLogin, UserUpdate } from 'types'
import { getUserByAccessTokenThunk, loginThunk, updateNguoiDungThunk } from '.'
import { getAccessToken } from 'utils'

type QuanLyNguoiDungInitialState = {
    accessToken?: string
    userLogin?: UserLogin | UserUpdate | UserByAccessToken 
    isFetchingLogin?: boolean
    infoUser?: UserUpdate
}

const initialState: QuanLyNguoiDungInitialState = {
    accessToken: getAccessToken(),
    isFetchingLogin: false,
}

const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {
        logOut: (state) => {
            state.accessToken = undefined
            state.userLogin = undefined
            localStorage.removeItem('ACCESSTOKEN')
            localStorage.removeItem('BOOKINGHISTORY')
        },
    }, // xử lý action đồng bộ
    extraReducers(builder) {
        // xử lý action bất đồng bộ (call API)

        builder
            .addCase(loginThunk.pending, (state) => {
                state.isFetchingLogin = true
            })
            .addCase(loginThunk.rejected, (state) => {
                state.isFetchingLogin = false
            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                console.log('payload loginThunk', payload)
                // lưu accessToken xuống localstorage
                localStorage.setItem('ACCESSTOKEN', payload.accessToken)
                state.accessToken = payload.accessToken
                
                // set lại user
                state.userLogin = {...payload, soDt: payload?.soDT, matKhau: state.infoUser.matKhau}
                state.infoUser = {...payload, soDt: payload?.soDT, matKhau: state.infoUser.matKhau}
                state.isFetchingLogin = false
            })

            .addCase(getUserByAccessTokenThunk.fulfilled, (state, { payload }) => {
                state.userLogin = payload
                state.infoUser = {...payload, soDt: payload?.soDT}
            })
            .addCase(updateNguoiDungThunk.fulfilled, (state, {payload})=>{
                state.userLogin = payload
                state.infoUser = payload
            })
    },
})

export const { actions: quanLyNguoiDungActions, reducer: quanLyNguoiDungReducer } =
    quanLyNguoiDungSlice
