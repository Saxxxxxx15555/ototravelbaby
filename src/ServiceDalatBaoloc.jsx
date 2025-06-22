import './TourDetail.css';

function ServiceDalatBaoloc() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header">
        <h1>Xe Riêng Đà Lạt – Bảo Lộc & Ngược Lại</h1>
        <p>Bạn cần di chuyển từ Đà Lạt đến Bảo Lộc hoặc ngược lại một cách an toàn – riêng tư – thoải mái?</p>
      </div>
      <div className="tour-detail-intro">
        <ul>
          <li>Đón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt hoặc Bảo Lộc</li>
          <li>Không ghép khách, xe riêng tư, tài xế chuyên nghiệp</li>
          <li>Chủ động thời gian, hỗ trợ hành lý chu đáo</li>
        </ul>
        <div className="tour-detail-pricing">
          <h2>Bảng Giá Xe Đà Lạt ⇄ Bảo Lộc (Một Chiều)</h2>
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
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>1.000.000 - 1.200.000</td>
              </tr>
              <tr>
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>Xe 7 chỗ (SUV/MPV)</td>
                <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>1.200.000 - 1.400.000</td>
              </tr>
            </tbody>
          </table>
          <p><i>Giá có thể thay đổi nhẹ tùy thời điểm và loại xe cụ thể. Vui lòng liên hệ để có giá chính xác.</i></p>
        </div>
      </div>
      <div className="tour-detail-info">
        <h2>Dịch vụ xe riêng chuyên nghiệp – không ghép khách của chúng tôi là giải pháp lý tưởng cho:</h2>
        <ul>
          <li>Gia đình, nhóm bạn, khách du lịch cá nhân</li>
          <li>Người đi công tác, về quê hoặc khám phá Bảo Lộc</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Lộ Trình Di Chuyển</h2>
        <ul>
          <li><b>Chiều đi:</b> Đà Lạt ➜ Bảo Lộc<br/>Đón tại khách sạn, homestay, nhà riêng khu vực trung tâm Đà Lạt. Di chuyển theo tuyến QL20 – ngắm đồi chè, rừng thông đẹp thơ mộng.</li>
          <li><b>Chiều về:</b> Bảo Lộc ➜ Đà Lạt<br/>Đón tận nơi tại trung tâm Bảo Lộc.</li>
          <li><b>Thời gian di chuyển:</b> khoảng 2.5 – 3 giờ</li>
        </ul>
      </div>
      <div className="tour-detail-why">
        <h2>Dịch Vụ Bao Gồm</h2>
        <ul>
          <li>Xe riêng đời mới, điều hòa mát lạnh, nội thất sạch sẽ</li>
          <li>Đưa đón tận nơi tại Đà Lạt hoặc Bảo Lộc (khách sạn, nhà riêng, homestay)</li>
          <li>Tài xế chuyên nghiệp, vui vẻ, hỗ trợ hành lý</li>
          <li>Di chuyển riêng tư, không ghép khách, chủ động lịch trình</li>
          <li>Có thể dừng nghỉ, chụp hình, ăn uống dọc đường theo yêu cầu</li>
        </ul>
      </div>
      <div className="tour-detail-note">
        <h2>Lưu Ý Khi Đặt Xe</h2>
        <ul>
          <li>Giá áp dụng cho điểm đón/trả trong nội thành Đà Lạt & trung tâm Bảo Lộc</li>
          <li>Nếu điểm ngoài trung tâm (Lạc Dương, Di Linh, Đại Lào, Lộc Thắng,...) có thể phụ thu thêm – báo giá rõ ràng trước khi đặt</li>
          <li>Nên đặt xe trước ít nhất 1 ngày để sắp xếp thời gian di chuyển hợp lý</li>
          <li>Dịch vụ lý tưởng cho di chuyển gia đình, nhóm nhỏ, khách cần riêng tư, đúng giờ</li>
        </ul>
      </div>
      <div className="tour-detail-contact">
        <h2>Liên Hệ Đặt Xe Ngay – Hỗ Trợ 24/7</h2>
        <p>Hotline/Zalo: <a href="tel:0349290693">034 929 0693</a><br/>Đặt nhanh – xác nhận trong 5 phút – tài xế đúng giờ – không trễ hẹn</p>
        <div className="tour-detail-hotline">🌄 Xe Riêng Đà Lạt – Bảo Lộc: Hành Trình Riêng Tư – Thoải Mái – Cảnh Đẹp Trên Mọi Cung Đường.</div>
      </div>
    </div>
  );
}

export default ServiceDalatBaoloc;
