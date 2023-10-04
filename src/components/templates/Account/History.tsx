import { useAuth } from "hooks"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { useAppDispatch } from "store"
import { getUserByAccessTokenThunk } from "store/quanLyNguoiDung"

export const History = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserByAccessTokenThunk())
  }, [dispatch])
  const { UserThongTinDatVe } = useAuth()
  return (
    <div>
      <div className="overflow-auto shadow-md sm:rounded-lg h-[750px] ">
        <table className="table-auto  w-full text-sm text-left text-gray-500">
          <thead className="sm:text-xs phone:text-[10px] text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="px-6 py-3">
                Phim
              </th>
              <th className="px-6 py-3">
                Mã vé
              </th>
              <th className="px-6 py-3">
                Thời gian đặt
              </th>
              <th className="px-6 py-3">
                Rạp
              </th>
              <th className="px-6 py-3">
                Giá
              </th>
              <th className="px-6 py-3">
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
                      <tr key={index} className="tr-table sm:text-[14px] phone:text-[10px] items-center">
                        <td scope="row" className="sm:flex sm:flex-row phone:flex-col items-center">
                          <img className="w-[60px] mr-[10px]" src={a.hinhAnh} alt="" /><p className="text-gray-500 font-400">{a.tenPhim}</p>
                        </td>
                        <td className="px-6 py-4">
                          {b.maGhe}
                        </td>
                        <td className="px-6 py-4">
                          <p className="mr-[15px]">{new Date(a.ngayDat).getHours()}:{new Date(a.ngayDat).getMinutes()}</p><p>{new Date(a.ngayDat).getDate()}/{new Date(a.ngayDat).getMonth()+1}/{new Date(a.ngayDat).getFullYear()}</p>
                        </td>
                        <td className="px-6 py-4">
                          {b.tenHeThongRap}
                        </td>
                        <td className="px-6 py-4">
                          {a.giaVe}đ
                        </td>
                        <td className="px-6 py-4">
                          <a href="#" onClick={() => {toast.success('Xóa thành công', {autoClose: 1000})}}><i className="fa-regular fa-trash-can sm:text-16 phone:text-[14px] text-red-200 cursor-pointer hover:text-red-600"></i></a>
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
