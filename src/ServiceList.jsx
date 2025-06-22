import './TourList.css';

const services = [
  {
    title: 'Dịch vụ đưa đón Sân bay Liên Khương - Đà Lạt',
    desc: 'Phục vụ đưa đón tận nơi - An toàn - Đúng giờ - Giá hợp lý.\n\nĐón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt\nKhông ghép khách, xe riêng tư, tài xế chuyên nghiệp\nChủ động thời gian, hỗ trợ hành lý chu đáo',
    price: 'Giá chỉ từ 250.000đ/lượt (Xe 4 chỗ, nội thành Đà Lạt)',
  },
  {
    title: 'Dịch vụ đưa đón Đà Lạt - Nha Trang & Ngược Lại',
    desc: 'Phục vụ đưa đón tận nơi - An toàn - Đúng giờ - Giá hợp lý.\n\nĐón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt hoặc Nha Trang\nKhông ghép khách, xe riêng tư, tài xế chuyên nghiệp\nChủ động thời gian, hỗ trợ hành lý chu đáo',
    price: 'Giá chỉ từ 1.600.000đ/lượt (Xe 4 chỗ, nội thành Đà Lạt & Nha Trang)',
  },
  {
    title: 'Dịch vụ đưa đón Đà Lạt - Mũi Né & Ngược Lại',
    desc: 'Phục vụ đưa đón tận nơi - An toàn - Đúng giờ - Giá hợp lý.\n\nĐón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt hoặc Mũi Né\nKhông ghép khách, xe riêng tư, tài xế chuyên nghiệp\nChủ động thời gian, hỗ trợ hành lý chu đáo',
    price: 'Giá chỉ từ 1.600.000đ/lượt (Xe 4 chỗ, nội thành Đà Lạt & Mũi Né)',
  },
  {
    title: 'Dịch vụ đưa đón Đà Lạt - Bảo Lộc & Ngược Lại',
    desc: 'Phục vụ đưa đón tận nơi - An toàn - Đúng giờ - Giá hợp lý.\n\nĐón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt hoặc Bảo Lộc\nKhông ghép khách, xe riêng tư, tài xế chuyên nghiệp\nChủ động thời gian, hỗ trợ hành lý chu đáo',
    price: 'Giá chỉ từ 1.000.000đ/lượt (Xe 4 chỗ, nội thành Đà Lạt & Bảo Lộc)',
  },
  {
    title: 'Dịch vụ đưa đón Đà Lạt - Sài Gòn & Ngược Lại',
    desc: 'Phục vụ đưa đón tận nơi - An toàn - Đúng giờ - Giá hợp lý.\n\nĐón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt hoặc Sài Gòn\nKhông ghép khách, xe riêng tư, tài xế chuyên nghiệp\nChủ động thời gian, hỗ trợ hành lý chu đáo',
    price: 'Giá chỉ từ 2.500.000đ/lượt (Xe 4 chỗ, nội thành Đà Lạt & Sài Gòn)',
  },
];

function ServiceList({ onServiceAirportDetail, onServiceDalatNhaTrangDetail, onServiceDalatMuineDetail, onServiceDalatBaolocDetail, onServiceDalatSaigonDetail }) {
  return (
    <section className="tour-section">
      <h2 className="tour-title">Xe Dịch Vụ Đà Lạt</h2>
      <div className="tour-list">
        {services.map((car, idx) => (
          <div className="tour-card" key={idx}>
            <h3>{car.title}</h3>
            <p style={{whiteSpace:'pre-line'}}>{car.desc}</p>
            <div className="tour-price">{car.price}</div>
            <button className="tour-btn" onClick={
              idx === 0 && onServiceAirportDetail ? onServiceAirportDetail :
              idx === 1 && onServiceDalatNhaTrangDetail ? onServiceDalatNhaTrangDetail :
              idx === 2 && onServiceDalatMuineDetail ? onServiceDalatMuineDetail :
              idx === 3 && onServiceDalatBaolocDetail ? onServiceDalatBaolocDetail :
              idx === 4 && onServiceDalatSaigonDetail ? onServiceDalatSaigonDetail : undefined
            }>Xem chi tiết</button>
          </div>
        ))}
      </div>
      {/* Bảng giá đã được xoá theo yêu cầu */}
    </section>
  );
}

export default ServiceList;
