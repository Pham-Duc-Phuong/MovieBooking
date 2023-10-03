import { createSlice } from "@reduxjs/toolkit";
import { ThongTinLichChieuPhim, HeThongRapChieu, CumRapChieu, ThongTinRap } from "types";
import { getLichChieuTheoPhimListThunk } from ".";

type quanLyLichChieuInitialState = {
    ThongTinLichChieuTheoPhim?: ThongTinLichChieuPhim<HeThongRapChieu<CumRapChieu<ThongTinRap[]>[]>[]>[]
}
const initialState:quanLyLichChieuInitialState = {}

const quanLyLichChieuTheoPhimSlice = createSlice({
    name: 'quanLyLichChieuTheoPhim',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
        .addCase(getLichChieuTheoPhimListThunk.fulfilled, (state, {payload} ) => {
            state.ThongTinLichChieuTheoPhim = payload
        })
    }
})
export const { reducer: quanLyLichChieuTheoPhimReducer, actions: quanLyLichChieuTheoPhimActions} = quanLyLichChieuTheoPhimSlice