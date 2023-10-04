import { useAuth } from "hooks"
import { useEffect } from "react"
import { useAppDispatch } from "store"
import { getUserByAccessTokenThunk } from "store/quanLyNguoiDung"

export const History = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserByAccessTokenThunk())
  }, [dispatch])
  const { UserThongTinDatVe } = useAuth()
  console.log('UserThongTinDatVe', UserThongTinDatVe)
  return (
    <div>
      <div className="relative overflow-auto shadow-md sm:rounded-lg h-[750px] ">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Phim
              </th>
              <th scope="col" className="px-6 py-3">
                Mã vé
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian đặt
              </th>
              <th scope="col" className="px-6 py-3">
                Rạp
              </th>
              <th scope="col" className="px-6 py-3">
                Giá
              </th>
              <th scope="col" className="px-6 py-3">
                <i className="fa-regular fa-trash-can text-16 text-red-600"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              UserThongTinDatVe?.thongTinDatVe?.map((a) => {
                return (
                  a?.danhSachGhe?.map((b, index) => {
                    return (
                      <tr key={index} className="tr-table">
                        <td scope="row" className="th-table flex items-center">
                          <img className="w-[40px] mr-[10px]" src={a.hinhAnh} alt="" /><p className="text-gray-500 font-400">{a.tenPhim}</p>
                        </td>
                        <td className="px-6 py-4">
                          {b.maGhe}
                        </td>
                        <td className="px-6 py-4">
                          <span className="mr-[15px]">{new Date(a.ngayDat).getHours()} : {new Date(a.ngayDat).getMinutes()}</span><span>{new Date(a.ngayDat).getDate()} / {new Date(a.ngayDat).getMonth()+1} / {new Date(a.ngayDat).getFullYear()}</span>
                        </td>
                        <td className="px-6 py-4">
                          {b.tenHeThongRap}
                        </td>
                        <td className="px-6 py-4">
                          {a.giaVe}đ
                        </td>
                        <td className="px-6 py-4">
                          <a href="#" onClick={() => {alert('Chức năng đang được phát triển')}}><i className="fa-regular fa-trash-can text-16 text-red-200 cursor-pointer hover:text-red-600"></i></a>
                        </td>
                      </tr>
                    )
                  })
                )
              })
            }
          </tbody>
        </table>
      </div>


    </div>

  )
}
