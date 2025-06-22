import './TourDetail.css';

function ServiceAirport() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header">
        <h1>Xe Đưa Đón Sân Bay Liên Khương - Đà Lạt</h1>
        <p>Dịch vụ xe riêng đưa đón giữa Sân bay Liên Khương và trung tâm Đà Lạt một cách nhanh chóng, tiện lợi và an toàn.</p>
      </div>
      <div className="tour-detail-intro">
        <ul>
          <li>Đón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt</li>
          <li>Không ghép khách, xe riêng tư, tài xế chuyên nghiệp</li>
          <li>Chủ động thời gian, hỗ trợ hành lý chu đáo</li>
        </ul>
        <div className="tour-detail-pricing"><b>Giá chỉ từ 250.000đ/lượt (Xe 4 chỗ, nội thành Đà Lạt)</b></div>
      </div>
      <div className="tour-detail-info">
        <h2>Chúng tôi phục vụ:</h2>
        <ul>
          <li>Khách du lịch cá nhân, gia đình, nhóm bạn bè</li>
          <li>Doanh nhân, khách công tác cần sự riêng tư và đúng giờ</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Lộ Trình & Thời Gian</h2>
        <ul>
          <li><b>Chiều đi:</b> Sân bay Liên Khương ➜ Trung tâm Đà Lạt<br/>Tài xế chờ sẵn tại sảnh đến sân bay (cầm bảng tên nếu yêu cầu). Di chuyển thẳng về khách sạn/điểm đến trong trung tâm Đà Lạt.</li>
          <li><b>Chiều về:</b> Trung tâm Đà Lạt ➜ Sân bay Liên Khương<br/>Đón tại khách sạn/điểm hẹn ở Đà Lạt theo giờ bay của quý khách. Đảm bảo đến sân bay kịp thời gian làm thủ tục.</li>
          <li><b>Thời gian di chuyển:</b> Khoảng 30-45 phút (tùy thuộc vào giao thông).</li>
        </ul>
      </div>
      <div className="tour-detail-pricing">
        <h2>Bảng Giá Xe Đưa Đón Sân Bay (Một Chiều)</h2>
        <table className="airport-table" style={{margin: '0 auto', borderCollapse: 'collapse', minWidth: '340px'}}>
          <thead>
            <tr>
              <th style={{border: '1.5px solid #1e90ff', padding: '10px 18px', background: '#f0f7ff', color: '#1e90ff', fontWeight: 700, textAlign: 'center'}}>Loại xe</th>
              <th style={{border: '1.5px solid #1e90ff', padding: '10px 18px', background: '#f0f7ff', color: '#1e90ff', fontWeight: 700, textAlign: 'center'}}>Giá (VNĐ/lượt)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>Xe 4 chỗ (Sedan: Vios, Accent,...)</td>
              <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>300.000 - 350.000</td>
            </tr>
            <tr>
              <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>Xe 7 chỗ (SUV/MPV: Innova, Fortuner, Xpander,...)</td>
              <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>400.000 - 450.000</td>
            </tr>
          </tbody>
        </table>
        <p><i>Giá có thể thay đổi nhẹ tùy thời điểm và loại xe cụ thể. Vui lòng liên hệ để có giá chính xác.</i></p>
      </div>
      <div className="tour-detail-why">
        <h2>Ưu Điểm Dịch Vụ</h2>
        <ul>
          <li>Xe riêng đời mới, sạch sẽ, không gian thoải mái.</li>
          <li>Tài xế nhiệt tình, kinh nghiệm, lái xe an toàn.</li>
          <li>Đón trả tận nơi, không ghép khách, đảm bảo riêng tư.</li>
          <li>Giá cả cạnh tranh, minh bạch, không phụ phí ẩn.</li>
          <li>Hỗ trợ đặt xe nhanh chóng, xác nhận ngay.</li>
          <li>Phục vụ 24/7, kể cả các chuyến bay đêm hoặc sáng sớm.</li>
        </ul>
      </div>
      <div className="tour-detail-note">
        <h2>Lưu Ý</h2>
        <ul>
          <li>Vui lòng cung cấp chính xác thông tin chuyến bay (mã chuyến bay, giờ cất/hạ cánh) để chúng tôi sắp xếp xe chu đáo.</li>
          <li>Nên đặt xe trước để đảm bảo có xe, đặc biệt vào mùa cao điểm du lịch.</li>
          <li>Giá trên áp dụng cho đưa đón trong khu vực trung tâm Đà Lạt. Các khu vực xa hơn có thể có phụ thu nhỏ.</li>
        </ul>
      </div>
      <div className="tour-detail-contact">
        <h2>Đặt Xe Sân Bay Ngay!</h2>
        <p>Liên hệ Hotline/Zalo: <a href="tel:0349290693">034 929 0693</a> để được tư vấn và đặt xe nhanh nhất.<br/>Chúng tôi luôn sẵn sàng phục vụ quý khách!</p>
        <div className="tour-detail-hotline">✈️ Bắt đầu hành trình Đà Lạt của bạn một cách suôn sẻ và thoải mái!</div>
      </div>
    </div>
  );
}

export default ServiceAirport;
