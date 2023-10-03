import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "services";

export const getTheaterListThunk = createAsyncThunk(
    'quanLyRap/getTheaterList',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getTheaterList()
            return data.data.content
        } catch (err){
            return rejectWithValue(err)
        }
    }
)