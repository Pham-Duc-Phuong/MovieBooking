import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "services";

export const getLichChieuListThunk = createAsyncThunk(
    'getLichChieuList/lichChieuList',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getLichChieuList('?maNhom=GP08')
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)