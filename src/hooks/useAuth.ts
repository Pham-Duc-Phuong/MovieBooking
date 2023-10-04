import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const useAuth = () => {
    const { accessToken, userLogin, infoUser, isFetchingLogin, UserThongTinDatVe } = useSelector((state: RootState) => state.quanLyNguoiDung)

    return {
        accessToken,
        user: userLogin,
        infoUser,
        isFetchingLogin,
        UserThongTinDatVe
    }
}
export const useAuthMovie = () => {
    const { movieList, isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)

    return {
        isFetchingMovieList,
        movie: movieList,
    }
}
