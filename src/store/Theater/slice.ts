import { createSlice } from "@reduxjs/toolkit"
import { Theater } from "types"
import { getTheaterListThunk } from "."

type quanLyRapInitialState = {
    theaterList?: Theater[]
    isFetchingTheaterList?: boolean
}

const initialState: quanLyRapInitialState = {}

const quanLyRapSlice = createSlice({
    name: "quanLyRap",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getTheaterListThunk.pending, (state) => {
                state.isFetchingTheaterList = true
            })
            .addCase(getTheaterListThunk.fulfilled, (state, { payload }) => {
                state.isFetchingTheaterList = false
                state.theaterList = payload
            })
            .addCase(getTheaterListThunk.rejected, (state) => {
                state.isFetchingTheaterList = false
            })
    }
})

export const { actions: quanLyRapActions, reducer: quanLyRapReducer } = quanLyRapSlice