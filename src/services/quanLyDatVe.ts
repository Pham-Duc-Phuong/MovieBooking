import { apiInstance } from 'constant/apiInstance'
import { LayDanhSachPhongVe, bookedTicket, bookedTicketList, danhSachGhe } from 'types'

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API,
})

export const quanLyDatVeServices = {
    datVe: (data: bookedTicketList<bookedTicket[]>) => api.post<ApiResponse<bookedTicketList<bookedTicket[]>>>('/DatVe', data),
    danhsachphongve: (maLichChieu: '') => api.get<ApiResponse<LayDanhSachPhongVe>>(`/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`),
    capNhatTinhTrangGhe: (maLichChieu: '', data: danhSachGhe) => api.put<ApiResponse<LayDanhSachPhongVe>>(`/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`, data),
}