import { createSlice } from '@reduxjs/toolkit'
import { bookingThunk, danhSachPhongVeThunk } from '.'
import { LayDanhSachPhongVe, bookedTicket, bookedTicketList, danhSachGhe } from 'types'
type MovieBookingInitialState = {
    layDanhSachPhongVe: LayDanhSachPhongVe
    booking: danhSachGhe[]
    bookedTicketList: bookedTicketList<bookedTicket[]>
    isFetchBooking: boolean
}
const initialState: MovieBookingInitialState = {
    layDanhSachPhongVe: {
        danhSachGhe: [],
        thongTinPhim: {
            maLichChieu: 0,
            tenCumRap: '',
            tenRap: '',
            diaChi: '',
            tenPhim: '',
            hinhAnh: '',
            ngayChieu: '',
            gioChieu: ''
        }
    },
    booking: [],
    bookedTicketList: {
        maLichChieu: 0,
        danhSachVe: []
    },
    isFetchBooking: false
}

const MovieBookingSlice = createSlice({
    name: 'MovieBooking',
    initialState,
    reducers: {
        ChairBooking: (state, { payload }) => {
            const index = state.booking.findIndex((a) => a.stt === payload.stt)
            if (state.booking.length < 8) {
                if (index !== -1) {
                    state.booking.splice(index, 1)
                } else {
                    state.booking.push(payload)
                }
            } else {
                if (index === -1) {
                    alert('Khách hàng chỉ được đặt tốt đa 8 vé')
                } else {
                    state.booking.splice(index, 1)
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(danhSachPhongVeThunk.fulfilled, (state, { payload }) => {
                state.layDanhSachPhongVe = payload
                state.isFetchBooking = false
            })
            .addCase(danhSachPhongVeThunk.pending, (state) => {
                state.isFetchBooking = true
            })
            .addCase(bookingThunk.fulfilled, (state) => {
                state.bookedTicketList.danhSachVe = [...state.bookedTicketList.danhSachVe, ...state.booking]
                state.booking = []
            })
    },
})

export const { reducer: MovieBookingReducer, actions: MovieBookingActions } =
    MovieBookingSlice

