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
    thongTinDatVe: []
    matKhau:string
    loaiNguoiDung: {
        maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    }
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