import './TourDetail.css';

function ServiceDalatNhaTrang() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header">
        <h1>Xe Riêng Đà Lạt – Nha Trang & Ngược Lại</h1>
        <p>Tận hưởng chuyến đi thoải mái, riêng tư và an toàn giữa Đà Lạt và Nha Trang với dịch vụ xe riêng của chúng tôi.</p>
      </div>
      <div className="tour-detail-intro">
        <ul>
          <li>Đón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt hoặc Nha Trang</li>
          <li>Không ghép khách, xe riêng tư, tài xế chuyên nghiệp</li>
          <li>Chủ động thời gian, hỗ trợ hành lý chu đáo</li>
        </ul>
        <div className="tour-detail-pricing">
          <h2>Bảng Giá Xe Đà Lạt ⇄ Nha Trang (Một Chiều)</h2>
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
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>1.500.000</td>
              </tr>
              <tr>
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>Xe 7 chỗ (SUV/MPV)</td>
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>1.800.000</td>
              </tr>
            </tbody>
          </table>
          <p><i>Giá có thể thay đổi nhẹ tùy thời điểm và loại xe cụ thể. Vui lòng liên hệ để có giá chính xác.</i></p>
        </div>
      </div>
      <div className="tour-detail-info">
        <h2>Lựa chọn hoàn hảo cho:</h2>
        <ul>
          <li>Kỳ nghỉ gia đình, du lịch cặp đôi hoặc nhóm bạn</li>
          <li>Di chuyển tiện lợi giữa hai thành phố du lịch nổi tiếng</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Lộ Trình Di Chuyển</h2>
        <ul>
          <li><b>Chiều đi:</b> Đà Lạt ➜ Nha Trang<br/>Đón tại khách sạn, homestay, hoặc điểm hẹn trung tâm Đà Lạt. Di chuyển qua cung đường đèo Khánh Lê (đèo Omega) tuyệt đẹp, ngắm cảnh núi rừng hùng vĩ.</li>
          <li><b>Chiều về:</b> Nha Trang ➜ Đà Lạt<br/>Đón tận nơi tại trung tâm thành phố Nha Trang.</li>
          <li><b>Thời gian di chuyển dự kiến:</b> 3 – 3.5 giờ.</li>
        </ul>
      </div>
      <div className="tour-detail-why">
        <h2>Dịch Vụ Bao Gồm</h2>
        <ul>
          <li>Xe riêng đời mới, sạch sẽ, tiện nghi, có máy lạnh.</li>
          <li>Tài xế kinh nghiệm, thân thiện, am hiểu tuyến đường.</li>
          <li>Đón trả tận nơi theo yêu cầu tại trung tâm Đà Lạt và Nha Trang.</li>
          <li>Nước suối miễn phí trên xe.</li>
          <li>Lịch trình linh hoạt, có thể dừng nghỉ dọc đường (theo thỏa thuận).</li>
        </ul>
      </div>
      <div className="tour-detail-note">
        <h2>Lưu Ý Khi Đặt Xe</h2>
        <ul>
          <li>Giá trên áp dụng cho các điểm đón/trả trong phạm vi trung tâm thành phố. Phụ thu có thể áp dụng cho các điểm ở xa.</li>
          <li>Vui lòng đặt xe trước, đặc biệt vào các dịp lễ, Tết để đảm bảo có xe.</li>
          <li>Chúng tôi cam kết xe chất lượng, tài xế chuyên nghiệp, mang đến trải nghiệm tốt nhất.</li>
        </ul>
      </div>
      <div className="tour-detail-contact">
        <h2>Đặt Xe Đà Lạt - Nha Trang Ngay Hôm Nay!</h2>
        <p>Hotline/Zalo tư vấn và đặt xe: <a href="tel:0349290693">034 929 0693</a><br/>Nhanh chóng - Uy tín - Chất lượng!</p>
        <div className="tour-detail-hotline">🌊 Kết nối Đà Lạt mộng mơ và Nha Trang biển xanh một cách tiện lợi nhất!</div>
      </div>
    </div>
  );
}

export default ServiceDalatNhaTrang;
