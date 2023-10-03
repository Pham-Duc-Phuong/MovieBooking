export type ThongTinLichChieuPhim<A> = {
    heThongRapChieu: A
    maPhim: string
    tenPhim: string
    biDanh: string
    trailer: string
    hinhAnh: string
    moTa: string
    maNhom: string
    hot: boolean
    dangChieu: boolean
    sapChieu: boolean
    ngayKhoiChieu: string
    danhGia: number
}
export type HeThongRapChieu<B> = {
    maHeThongRap: string
    tenHeThongRap: string
    logo: string
    cumRapChieu: B
}
export type lstCumRap<C> = {
    maCumRap: string
    tenCumRap: string
    hinhAnh: string
    diaChi: string
    lichChieuPhim: C
}
export type lstLichChieuPhim = {
    maLichChieu: number
    maRap: string
    tenRap: string
    ngayChieuGioChieu: string
    giaVe: number
    thoiLuong: number
}