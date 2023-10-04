export type UserLogin = {
    taiKhoan: string
    hoTen: string
    email: string
    soDT: string
    maNhom: string
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    accessToken: string
}

export type UserByAccessToken = Omit<UserLogin, 'accessToken'> & {
    matKhau: string
    loaiNguoiDung: {
        maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    }
    thongTinDatVe:  {
        giaVe: number
        hinhAnh: string
        maVe: number
        ngayDat: string
        tenPhim: string
        thoiLuongPhim: number
        danhSachGhe: {
            maCumRap: string
            maGhe: number
            maHeThongRap: string
            maRap: number
            tenCumRap: string
            tenGhe: string
            tenHeThongRap: string
            tenRap: string
        }[]
    }[]
}
export type UserUpdate = {
    taiKhoan: string
    hoTen: string
    email: string
    matKhau: string
    soDt: string
    maNhom: string
    maLoaiNguoiDung: string
}
// export type UserThongTinDatVe = UserLogin & {
//     thongTinDatVe: {
//         giaVe: number
//         hinhAnh: string
//         maVe: number
//         ngayDat: string
//         tenPhim: string
//         thoiLuongPhim: number
//         danhSachVe: danhSachGhe[]
//     }[]
// }
