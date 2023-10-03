import { apiInstance } from 'constant/apiInstance'
import { LoginSchemaType, RegisterSchemaType } from 'schema'
import { UserByAccessToken, UserLogin, UserUpdate} from 'types'

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
})

export const quanLyNguoiDungServices = {
    register: (data: RegisterSchemaType) => api.post('/DangKy', data),

    login: (data: LoginSchemaType) => api.post<ApiResponse<UserLogin>>('/DangNhap', data),

    getUserByAccessToken: () => api.post<ApiResponse<UserByAccessToken>>('/ThongTinTaiKhoan'),

    updateUser: (data: UserUpdate) => api.put<ApiResponse<UserUpdate>>('/CapNhatThongTinNguoiDung', data)
}
// login : (data: LoginSchemaType) => api.post<ApiResponse<UserLogin>>('/DangNhap', data)
// LoginSchemaType: là kiểu dữ liệu cho data truyền vào actionThunk
// <ApiResponce<UserLogin>> :  là kiểu dữ liệu mà response từ backend trả về 
// !!! callAPI thành công xong backend sẽ trả về response 200 thì <abc<def>> được tạo ở file type phải khai báo y chang response đó