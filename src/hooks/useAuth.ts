import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const useAuth = () => {
    const { accessToken, userLogin, infoUser } = useSelector((state: RootState) => state.quanLyNguoiDung)

    return {
        accessToken,
        user: userLogin,
        infoUser
    }
}
export const useAuthMovie = () => {
    const { movieList , isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)

    return {
        isFetchingMovieList,
        movie: movieList,
    }
}
