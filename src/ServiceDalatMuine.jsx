import './TourDetail.css';

function ServiceDalatMuine() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header">
        <h1>Xe Riêng Đà Lạt – Mũi Né (Phan Thiết) & Ngược Lại</h1>
        <p>Khám phá vẻ đẹp từ cao nguyên Đà Lạt đến biển xanh Mũi Né một cách tiện lợi và thoải mái nhất.</p>
      </div>
      <div className="tour-detail-intro">
        <ul>
          <li>Đón/trả tận nơi tại khách sạn, nhà riêng, homestay nội thành Đà Lạt hoặc Mũi Né</li>
          <li>Không ghép khách, xe riêng tư, tài xế chuyên nghiệp</li>
          <li>Chủ động thời gian, hỗ trợ hành lý chu đáo</li>
        </ul>
        <div className="tour-detail-pricing"><b>Giá chỉ từ 1.600.000đ/lượt (Xe 4 chỗ, nội thành Đà Lạt & Mũi Né)</b></div>
      </div>
      <div className="tour-detail-info">
        <h2>Dịch vụ xe riêng của chúng tôi là lựa chọn lý tưởng cho:</h2>
        <ul>
          <li>Chuyến du lịch kết hợp núi và biển cho gia đình, cặp đôi, nhóm bạn</li>
          <li>Sự riêng tư, linh hoạt về thời gian và lộ trình</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Lộ Trình Di Chuyển</h2>
        <ul>
          <li><b>Chiều đi:</b> Đà Lạt ➜ Mũi Né (Phan Thiết)<br/>Đón tận nơi tại Đà Lạt (khách sạn, homestay, nhà riêng). Di chuyển qua cung đường QL28B (đèo Đại Ninh) hoặc QL20 & QL1A, tùy theo điều kiện thời tiết và sở thích ngắm cảnh.</li>
          <li><b>Chiều về:</b> Mũi Né (Phan Thiết) ➜ Đà Lạt<br/>Đón tận nơi tại khu vực Mũi Né, trung tâm Phan Thiết.</li>
          <li><b>Thời gian di chuyển:</b> Khoảng 3.5 - 4.5 giờ.</li>
        </ul>
      </div>
      <div className="tour-detail-pricing">
        <h2>Bảng Giá Xe Đà Lạt ⇄ Mũi Né (Một Chiều)</h2>
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
              <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>1.600.000 - 1.800.000</td>
            </tr>
            <tr>
              <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>Xe 7 chỗ (SUV/MPV)</td>
              <td style={{border: '1.5px solid #1e90ff', padding: '10px 18px', textAlign: 'center'}}>1.900.000 - 2.200.000</td>
            </tr>
          </tbody>
        </table>
        <p><i>Giá có thể thay đổi nhẹ tùy thời điểm và loại xe cụ thể. Vui lòng liên hệ để có giá chính xác.</i></p>
      </div>
      <div className="tour-detail-why">
        <h2>Tại Sao Chọn Dịch Vụ Của Chúng Tôi?</h2>
        <ul>
          <li>Xe đời mới, chất lượng cao, được bảo dưỡng định kỳ.</li>
          <li>Tài xế giàu kinh nghiệm, cẩn thận, vui vẻ, am hiểu các cung đường đẹp.</li>
          <li>Đón trả khách tận nơi, không lo tìm kiếm điểm đón.</li>
          <li>Hoàn toàn riêng tư, không ghép khách, tự do dừng nghỉ ngơi, chụp ảnh.</li>
          <li>Giá cả hợp lý, công khai, không phát sinh chi phí ngoài dự kiến.</li>
          <li>Đặt xe nhanh chóng, dễ dàng qua điện thoại hoặc Zalo.</li>
        </ul>
      </div>
      <div className="tour-detail-note">
        <h2>Lưu Ý Quan Trọng</h2>
        <ul>
          <li>Nên đặt xe sớm, nhất là vào các ngày cuối tuần hoặc dịp lễ, để đảm bảo có xe và giá tốt.</li>
          <li>Cung cấp thông tin chính xác về số lượng người, điểm đón/trả, thời gian để chúng tôi phục vụ tốt nhất.</li>
          <li>Giá có thể thay đổi tùy thuộc vào loại xe và thời điểm đặt.</li>
        </ul>
      </div>
      <div className="tour-detail-contact">
        <h2>Đặt Xe Đà Lạt - Mũi Né Ngay Hôm Nay!</h2>
        <p>Hotline/Zalo: <a href="tel:0349290693">034 929 0693</a><br/>Tận hưởng hành trình đáng nhớ từ núi xuống biển!</p>
        <div className="tour-detail-hotline">🏖️ Từ Đà Lạt ngàn hoa đến Mũi Né nắng vàng cát trắng - chỉ một chuyến xe thoải mái!</div>
      </div>
    </div>
  );
}

export default ServiceDalatMuine;
