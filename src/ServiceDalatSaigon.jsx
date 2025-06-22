import './TourDetail.css';

function ServiceDalatSaigon() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header">
        <h1>Xe Riêng Đà Lạt – Sài Gòn (TP.HCM) & Ngược Lại</h1>
        <p>Di chuyển thoải mái và chủ động giữa Đà Lạt và Sài Gòn với dịch vụ xe riêng chất lượng cao.</p>
      </div>
      <div className="tour-detail-intro">
        <ul>
          <li>Đón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt hoặc Sài Gòn</li>
          <li>Không ghép khách, xe riêng tư, tài xế chuyên nghiệp</li>
          <li>Chủ động thời gian, hỗ trợ hành lý chu đáo</li>
        </ul>
        <div className="tour-detail-pricing">
          <h2>Bảng Giá Xe Đà Lạt ⇄ Sài Gòn (Một Chiều)</h2>
          <table className="airport-table" style={{margin: '0 auto', borderCollapse: 'collapse', minWidth: '340px'}}>
            <thead>
              <tr>
                <th style={{border: '1.5px solid #1e90ff', padding: '10px 18px', background: '#f0f7ff', color: '#1e90ff', fontWeight: 700, textAlign: 'center'}}>Loại xe</th>
                <th style={{border: '1.5px solid #1e90ff', padding: '10px 18px', background: '#f0f7ff', color: '#1e90ff', fontWeight: 700, textAlign: 'center'}}>Giá (VNĐ/lượt)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>Xe 4 chỗ (Sedan)</td>
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>2.800.000 - 3.200.000</td>
              </tr>
              <tr>
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>Xe 7 chỗ (SUV/MPV)</td>
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>3.000.000 - 3.500.000</td>
              </tr>
            </tbody>
          </table>
          <p><i>Giá có thể thay đổi nhẹ tùy thời điểm và loại xe cụ thể. Vui lòng liên hệ để có giá chính xác.</i></p>
        </div>
      </div>
      <div className="tour-detail-info">
        <h2>Phù hợp cho:</h2>
        <ul>
          <li>Chuyến công tác, du lịch gia đình, hoặc về quê</li>
          <li>Khách hàng ưu tiên sự riêng tư, tiện nghi và đúng giờ</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Thông Tin Tuyến Đường</h2>
        <ul>
          <li><b>Chiều đi:</b> Đà Lạt ➜ Sài Gòn (TP.HCM)<br/>Đón khách tận nơi tại Đà Lạt (khách sạn, nhà riêng). Di chuyển theo Quốc lộ 20 và Cao tốc Long Thành - Dầu Giây.</li>
          <li><b>Chiều về:</b> Sài Gòn (TP.HCM) ➜ Đà Lạt<br/>Đón khách tại các quận trung tâm TP.HCM hoặc sân bay Tân Sơn Nhất.</li>
          <li><b>Thời gian di chuyển:</b> Khoảng 6-7 giờ (bao gồm thời gian nghỉ ngơi).</li>
        </ul>
      </div>
      <div className="tour-detail-why">
        <h2>Dịch Vụ Của Chúng Tôi Cam Kết</h2>
        <ul>
          <li>Xe đời mới, nội thất sang trọng, sạch sẽ, đầy đủ tiện nghi.</li>
          <li>Tài xế nhiều năm kinh nghiệm, thông thạo đường sá, phục vụ tận tâm.</li>
          <li>Đón trả khách tận nơi, đúng giờ theo yêu cầu.</li>
          <li>Không ghép khách, đảm bảo không gian riêng tư suốt hành trình.</li>
          <li>Hỗ trợ dừng nghỉ tại các trạm dừng chân tiện nghi.</li>
          <li>Nước suối, khăn lạnh miễn phí.</li>
        </ul>
      </div>
      <div className="tour-detail-note">
        <h2>Đặt Xe Dễ Dàng</h2>
        <ul>
          <li>Liên hệ qua Hotline/Zalo để được tư vấn và báo giá chi tiết.</li>
          <li>Cung cấp thông tin: điểm đón, điểm đến, thời gian, số lượng khách.</li>
          <li>Xác nhận đặt xe nhanh chóng.</li>
          <li>Thanh toán linh hoạt khi kết thúc chuyến đi hoặc chuyển khoản.</li>
        </ul>
      </div>
      <div className="tour-detail-contact">
        <h2>Đặt Xe Đà Lạt - Sài Gòn Ngay!</h2>
        <p>Hotline/Zalo: <a href="tel:0349290693">034 929 0693</a><br/>Trải nghiệm hành trình thoải mái và đẳng cấp cùng chúng tôi!</p>
        <div className="tour-detail-hotline">🚗 Hành trình kết nối Đà Lạt thơ mộng và Sài Gòn năng động chưa bao giờ dễ dàng đến thế!</div>
      </div>
    </div>
  );
}

export default ServiceDalatSaigon;
