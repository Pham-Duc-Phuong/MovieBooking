import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "services";

export const getLichChieuTheoPhimListThunk = createAsyncThunk(
    'getLichChieuList/lichChieuTheoPhimList',
    async (param: string, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getLichChieuTheoPhimList(`?maPhim=${param}`)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)