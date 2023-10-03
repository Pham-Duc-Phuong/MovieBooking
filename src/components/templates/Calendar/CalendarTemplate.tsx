import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { useEffect } from 'react'
import { Tabs } from 'components'
import { getLichChieuTheoPhimListThunk } from "store/lichChieuTheoPhim"
import { getTheaterListThunk } from "store/Theater"
import { useAuth } from "hooks"
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { PATH } from "constant"

export const CalendarTemplate = () => {
  const params = useParams();
  const { ThongTinLichChieuTheoPhim } = useSelector((state: RootState) => state.quanLyLichChieuTheoPhim)
  const { accessToken } = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const heThongRapChieu = ThongTinLichChieuTheoPhim?.heThongRapChieu;
  useEffect(() => {
    dispatch(getLichChieuTheoPhimListThunk(params.maPhim))
    dispatch(getTheaterListThunk());
  }, [dispatch, params.maPhim])
  return (
    <div>
      <Tabs
        centered={true}
        tabPosition="top"
        items={
          heThongRapChieu?.map(a => {
            return {
              label:
                <div className="flex flex-col items-center mx-[30px]">
                  <img style={{ width: 60, marginBottom: 15 }} src={`${a.logo}`} alt="" />
                  <p>{`${a.tenHeThongRap}`}</p>
                </div>
              ,
              key: `${a.maHeThongRap}`,
              children: <Tabs
                className="overflow-y-auto h-[600px]"
                tabPosition="left"
                items={
                  a?.cumRapChieu?.map(b => {
                    return {
                      label:
                        <div className="flex items-center ">
                          <img style={{ width: 60, paddingRight: 10 }} src={`${a.logo}`} alt="" />
                          <div className="flex flex-col items-start">
                            <p className="text-[17px]">{`${b.tenCumRap}`}</p>
                            <p className="text-[11px]">{`${b.diaChi}`}</p>
                          </div>
                        </div>,
                      key: `${b.maCumRap}`,
                      children: <div key={b.maCumRap}>
                        <div key={b.maPhim} className="mb-24">
                          <div className="flex">
                            <div className="h-[300px]">
                              <img style={{ width: 200, paddingRight: 10 }} src={b?.hinhAnh} alt="" />
                            </div>
                            <div className="flex flex-col items-start">
                              <div className="flex mb-10 items-start">
                                <div className="mr-10">
                                  {b.dangChieu ? <p className="text-comment bg-red-500 mb-6">Đang Chiếu</p> : <p className="text-comment bg-green-500 mb-6">Sắp Chiếu</p>}
                                  {b.hot && <p className="text-comment bg-red-600 text-yellow-300 mb-6"><i className="fa-solid fa-fire mr-10"></i>HOT</p>}
                                  <p className="text-comment bg-gray-400"><i className="fa-regular fa-hourglass-half mr-10"></i>120 phút</p>
                                </div>
                                <p className="text-[35px] font-700" >{b.tenPhim}</p>
                              </div>
                              <div className="grid grid-cols-5 gap-[10px]">
                                {
                                  b?.lichChieuPhim?.map(c => {
                                    return (
                                      <p key={c.maLichChieu} className="text-lichchieu" onClick={() => {

                                        if (!accessToken) {
                                          navigate(PATH.login)
                                          return
                                        }

                                        const path = generatePath(PATH.booking, { bookingid: c.maLichChieu, movieid: params.maPhim, macumrap: b.maCumRap, mahethongrap: a.maHeThongRap})
                                        navigate(path)
                                      }}>{new Date(c.ngayChieuGioChieu).getHours()} : {new Date(c.ngayChieuGioChieu).getMinutes()}</p>
                                    )
                                  })}
                              </div>
                            </div>
                          </div>
                          <hr className="mt-24" />
                        </div>
                      </div>
                    }
                  })
                }
              />
            }
          })
        }
      />
    </div>
  )
}

