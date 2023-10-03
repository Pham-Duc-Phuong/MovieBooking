import { Card } from "antd";


export const History = () => {
  const info = JSON.parse(localStorage.getItem('BOOKINGHISTORY'));
  let danhSachVe = [];
  if (info && info.danhSachVe) {
    danhSachVe = info.danhSachVe;
  }
  return (
    <>
      {danhSachVe.map(a => (
        <Card>
          <div>Mã ghế:  {a.maGhe}
          </div>
          <div>Giá vé: {a.giaVe}
          </div>
          <div>Tên rạp: {a.tenRap}
          </div>
          <div>Tên phim: {a.tenPhim}
          </div>
          <div>Ngày đặt: {a.ngayDat}</div>
        </Card>
      ))}
    </>

  )
}
