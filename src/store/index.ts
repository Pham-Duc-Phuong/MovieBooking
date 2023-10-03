import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { useDispatch } from 'react-redux'
import { getUserByAccessTokenThunk } from './quanLyNguoiDung'

export const store = configureStore({
    reducer: rootReducer,
    devTools: false,
})

// dispatch action khi client vào trang web
store.dispatch(getUserByAccessTokenThunk())

export type AppDispatch = (typeof store)['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<(typeof store)['getState']>

export default store