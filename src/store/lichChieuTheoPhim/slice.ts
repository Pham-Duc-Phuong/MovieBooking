import { createSlice } from "@reduxjs/toolkit";
import { ThongTinLichChieuPhim, HeThongRapChieu, lstCumRap, lstLichChieuPhim } from "types";
import { getLichChieuTheoPhimListThunk } from ".";

type quanLyLichChieuInitialState = {
    ThongTinLichChieuTheoPhim?: ThongTinLichChieuPhim<HeThongRapChieu<lstCumRap<lstLichChieuPhim[]>[]>[]>
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