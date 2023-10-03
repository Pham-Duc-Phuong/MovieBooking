import { createAsyncThunk } from '@reduxjs/toolkit'
import { quanLyDatVeServices } from 'services'
import { bookedTicket, bookedTicketList } from 'types'

export const bookingThunk = createAsyncThunk(
    'quanLyDatVe/booking',
    async (payload: bookedTicketList<bookedTicket[]>, { rejectWithValue }) => {
        try {
            const data = await quanLyDatVeServices.datVe(payload)
            console.log('data', data)
            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
export const danhSachPhongVeThunk  = createAsyncThunk(
    'quanLyDatVe/laydanhsachphongve',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async ({bookingid}: any, {rejectWithValue}) => {
        try{
            const data = await quanLyDatVeServices.danhsachphongve(bookingid)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const capNhatTinhTrangGheThunk  = createAsyncThunk(
    'quanLyDatVe/laydanhsachphongve',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async ({bookingid}: any, {rejectWithValue}) => {
        try{
            const data = await quanLyDatVeServices.danhsachphongve(bookingid)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)