export type bookedTicketList<A> = {
    maLichChieu: number
    danhSachVe: A
}
export type bookedTicket = {
    maGhe: number
    giaVe: number
}
export type thongTinPhim = {
    maLichChieu: number 
    tenCumRap: string
    tenRap: string
    diaChi: string
    tenPhim: string
    hinhAnh: string
    ngayChieu: string
    gioChieu: string
}
export type danhSachGhe = {
    maGhe: number
    tenGhe: string
    maRap: number
    loaiGhe: string
    stt: string
    giaVe: number
    daDat: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    taiKhoanNguoiDat: any
}
export type LayDanhSachPhongVe = {
    danhSachGhe: danhSachGhe[]
    thongTinPhim: thongTinPhim
}
