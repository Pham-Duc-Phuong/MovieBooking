import { createSlice } from "@reduxjs/toolkit";
import { CumRap, LichChieuTheoPhim, ThongTinLichChieuHeThongRap, danhSachPhimChieu } from "types";
import { getLichChieuListThunk,  } from ".";

type quanLyLichChieuInitialState = {
    ThongTinLichChieuHeThongRap?: ThongTinLichChieuHeThongRap<CumRap<danhSachPhimChieu<LichChieuTheoPhim[]>[]>[]>[]
}
const initialState:quanLyLichChieuInitialState = {}

const quanLyLichChieuSlice = createSlice({
    name: 'quanLyLichChieu',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
        .addCase(getLichChieuListThunk.fulfilled, (state, {payload}) => {
            state.ThongTinLichChieuHeThongRap = payload
        })
    }
})

export const { reducer: quanLyLichChieuReducer, actions: quanLyLichChieuActions} = quanLyLichChieuSlice