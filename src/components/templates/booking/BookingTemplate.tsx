import { RootState, useAppDispatch } from "store"
import { useEffect } from 'react'
import { MovieBookingActions, bookingThunk, danhSachPhongVeThunk } from "store/booking"
import { useSelector } from "react-redux"
import cn from 'classnames'
import { useNavigate, useParams } from "react-router-dom"
import { getLichChieuListThunk } from "store/lichChieu"
import { bookedTicket, bookedTicketList } from "types"
import { SubmitHandler } from 'react-hook-form'
import { toast } from "react-toastify"
import { getLichChieuTheoPhimListThunk } from "store/lichChieuTheoPhim"
import { Button, Skeleton } from "components"

export const BookingTemplate = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useAppDispatch()
  const { bookingid, macumrap, mahethongrap, movieid } = params
  useEffect(() => {
    dispatch(getLichChieuListThunk())
    dispatch(danhSachPhongVeThunk(params))
    dispatch(getLichChieuTheoPhimListThunk(movieid))
  }, [dispatch, params, movieid])
  const { booking, layDanhSachPhongVe, isFetchBooking } = useSelector((state: RootState) => state.MovieBooking)
  const { ThongTinLichChieuHeThongRap } = useSelector((state: RootState) => state.quanLyLichChieu)
  // Đặt vé trong Lịch Chiếu
  const MaHeThongRap = ThongTinLichChieuHeThongRap?.find(a => a.maHeThongRap === mahethongrap)
  const MaCumRap = MaHeThongRap?.lstCumRap?.find(b => b.maCumRap === macumrap)
  const MovieId = MaCumRap?.danhSachPhim?.find(c => c.maPhim === Number(movieid))
  const BookingId = MovieId?.lstLichChieuTheoPhim?.find(d => d.maLichChieu === Number(bookingid))
  const GheDaDat: SubmitHandler<bookedTicketList<bookedTicket[]>> = (values) => {
    dispatch(bookingThunk(values)).unwrap().then(() => { toast.success('Đặt vé thành công'), dispatch(danhSachPhongVeThunk(params)) }).catch(() => toast.error('Đặt vé thất bại'))
  }
  if (isFetchBooking) {
    return (
      <div className="shadow-md py-[25px] px-[10px] border rounded-lg my-[35px] mx-[10px]">
        {[...Array(10)].map((_, index) => {
          return (
            <div key={index} className="!w-full">
              <Skeleton.Input className="!w-full mt-16" />
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="">
      <Button className="btn-back ml-[10px]"
        onClick={() => {
          navigate('/')
        }}
      >
        <i className="fa-solid fa-arrow-left pr-6"></i>Quay lại
      </Button>
      <div className="grid xl:grid-cols-booking lg:grid-cols-1">
        <div className="flex flex-col items-center shadow-md py-[25px] px-[10px] border rounded-lg my-[25px] mx-[10px]">
          <img className="w-[800px] mb-[40px]" src="/images/bg-screen.png" alt="" />
          <div className="grid grid-cols-16 gap-[10px]">
            {
              layDanhSachPhongVe?.danhSachGhe?.map((a) => {
                return (
                  <p key={a.maGhe} className={cn("ghe", {
                    'bg-red-600 , text-white': booking?.find(b => b.stt === a.stt),
                    'text-black line-through bg-gray-400 pointer-events-none': a.daDat
                  })}
                    onClick={() => {
                      dispatch(MovieBookingActions.ChairBooking(a))
                    }}
                  >{a.tenGhe}</p>
                )
              })
            }
          </div>
          <div className='flex justify-center items-center mt-24'>
            <p className='ghe mr-[10px]'>A1</p><p className='mr-[50px] md:text-16 sm:text-12 phone:text-10'>Ghế chưa đặt</p>
            <p className='ghe mr-[10px] text-white bg-red-600'>A1</p><p className='mr-[50px] md:text-16 sm:text-12 phone:text-10'>Ghế đang chọn</p>
            <p className='ghe mr-[10px] text-black line-through bg-gray-400 '>A1</p><p className=" md:text-16 sm:text-12 phone:text-10">Ghế đã đặt</p>
          </div>
        </div>
        <div className="border rounded-lg mx-[10px] shadow-md  my-[25px]">
          <div className="flex justify-start items-start m-[10px]">
            <img className='h-[150px] mr-[10px] rounded-6' src={MovieId?.hinhAnh} alt="" />
            <div>
              {/* Thông tin phim chiếu */}
              <table className="text-14 w-full text-left text-gray-500 dark:text-gray-400 mb-24">
                <thead></thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="th-atBooking">
                      Tên phim
                    </th>
                    <td className="px-6 py-[10px]">
                      {MovieId?.tenPhim}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="th-atBooking">
                      Rạp
                    </th>
                    <td className="px-6 py-[10px]">
                      {MaCumRap?.tenCumRap}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="th-atBooking">
                      Địa chỉ
                    </th>
                    <td className="px-6 py-[10px]">
                      {MaCumRap?.diaChi}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="th-atBooking">
                      Suất
                    </th>
                    <td className="px-6 py-[10px]">
                      <span>{new Date(BookingId?.ngayChieuGioChieu).getHours()} : {new Date(BookingId?.ngayChieuGioChieu).getMinutes()}</span>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <th scope="row" className="th-atBooking">
                      Phòng chiếu
                    </th>
                    <td className="px-6 py-[10px]">
                      {BookingId?.tenRap}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            {/* Thông tin vé */}
            <div className="w-full text-center text-gray-500 h-[390px]">
              <div className="text-14 text-gray-700 uppercase bg-gray-50 grid grid-cols-3 font-600">
                <p className="px-6 py-3">
                  Ghế
                </p>
                <p className="px-6 py-3">
                  Giá
                </p>
                <p className="px-6 py-3">
                  Hủy
                </p>
              </div>
              <div className="">
                {
                  booking?.map(a => {
                    return (
                      <div key={a.stt} className="bg-white border-b text-14 grid grid-cols-3">
                        <p className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {a.stt}
                        </p>
                        <p className="px-6 py-[10px]">
                          {a.giaVe}
                        </p>
                        <p className="px-6 py-[10px] ">
                          <span className="border border-solid border-red-600 bg-red-600 text-white font-600 p-[7px] px-[10px] rounded-md cursor-pointer"
                            onClick={() => {
                              dispatch(MovieBookingActions.ChairBooking(a))
                            }}
                          >X</span>
                        </p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          {/* Kết quả đặt vé */}
          <div className="w-full text-center text-gray-500 ">
            <div className="text-16 text-gray-700 uppercase bg-gray-50">
              <div className='grid grid-cols-3'>
                <p className="py-3 font-600">
                  Tổng tiền
                </p>
                <p className="py-3 mr-20 font-600">
                  {booking?.reduce((total, a) => {
                    return (total += a.giaVe)
                  }, 0)}
                </p>
                <p className="py-3 mr-70">
                  <span className="text-14 border border-solid border-green-600 bg-green-600 text-white font-600 p-[7px] px-[10px] rounded-md cursor-pointer"
                    onClick={() => {
                      const values: bookedTicketList<bookedTicket[]> = {
                        maLichChieu: Number(bookingid),
                        danhSachVe: booking.map((a) => {
                          return ({
                            maGhe: a.maGhe,
                            giaVe: a.giaVe,
                          })
                        })
                      }
                      GheDaDat(values)
                    }}
                  >Thanh toán</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
