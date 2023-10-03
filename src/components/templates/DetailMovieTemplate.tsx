import { Button } from "components"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store"
import { getMovieListThunk } from "store/quanLyPhim"

export const DetailMovieTemplate = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMovieListThunk())
    }, [dispatch])
    const navigate = useNavigate()
    const params = useParams()
    const { movieList } = useSelector((state: RootState) => state.quanLyPhim)
    const detailMovie = movieList?.find(a => a.maPhim === Number(params.movieid))
    return (
        <div className='bg-#170f23'>
            <div className="detailShow">
                <img className="object-cover ml-24 mr-24 rounded-lg h-[500px]" src={detailMovie?.hinhAnh} alt='' />
                <div className="p-4 leading-normal">
                    <h5 className="text-36 font-bold text-gray-900 dark:text-white">{detailMovie.tenPhim}</h5>
                    <div className="relative overflow-x-auto ">
                        <table className="text-16 w-800 text-left text-gray-500 mb-24">
                            <thead>
                            </thead>
                            <tbody>
                                <tr className="tr-table">
                                    <th scope="row" className="th-table">
                                        Tên phim
                                    </th>
                                    <td className="px-6 py-3">
                                        {detailMovie.tenPhim}
                                    </td>
                                </tr>
                                <tr className="tr-table">
                                    <th scope="row" className="th-table">
                                        Ngày khởi chiếu
                                    </th>
                                    <td className="px-6 py-3">
                                        {detailMovie.ngayKhoiChieu}
                                    </td>
                                </tr>
                                <tr className="tr-table">
                                    <th scope="row" className="th-table">
                                        Mô tả
                                    </th>
                                    <td className="px-6 py-3">
                                        {detailMovie.moTa}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="th-table">
                                        Đánh giá
                                    </th>
                                    <td className="px-6 py-3">
                                        {detailMovie.danhGia}/10
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='mb-24'>
                            <div>
                                <a href={detailMovie.trailer} target='blank'><Button className="btn-detail mx-10"
                                >
                                    Trailer
                                </Button></a>
                                <Button className="btn-booking"
                                    onClick={() => navigate(`/calendar/${detailMovie.maPhim}`)}
                                >
                                    Đặt vé
                                </Button>
                                <Button className="btn-back ml-[10px]"
                                    onClick={() => {
                                        navigate('/')
                                    }}
                                >
                                    <i className="fa-solid fa-arrow-left pr-6"></i>Quay lại
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
