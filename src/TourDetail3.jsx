import './TourDetail.css';

const itinerary = [
  {
    title: 'Đón khách tại điểm hẹn (trong nội thành)',
    desc: 'Tài xế đến đúng giờ, hỗ trợ chu đáo – khởi hành sớm để kịp săn mây đẹp nhất.',
    img: '/noithanhdalat.jpg',
  },
  {
    title: 'Thiên Đường Săn Mây',
    desc: 'Nơi hội tụ những tầng mây bồng bềnh – không gian huyền ảo tựa tranh vẽ. Đây là điểm ngắm bình minh "thần thánh" với góc chụp sống ảo đỉnh cao giữa thiên nhiên.',
    img: '/thienduongsanmay.jpg',
  },
  {
    title: 'Túi Bùn – Quạt Gió',
    desc: 'Tiểu cảnh đẹp – mới lạ với cảnh vật đậm chất "Tây Nguyên chill". Check-in nhẹ nhàng với quạt gió, đồi thông và view mây trời lộng lẫy.',
    img: '/tuibunquatgio.jpg',
  },
  {
    title: 'Vườn Hồng Treo Gió',
    desc: 'Trải nghiệm không gian nông trại đậm chất Đà Lạt với những dây hồng chín đỏ treo lủng lẳng – không chỉ đẹp mà còn mang đậm hồn quê.',
    img: '/vuonhongtreogio.jpg',
  },
  {
    title: 'Trạm Ký Ức – Memory Station',
    desc: 'Quán cà phê mang phong cách hoài cổ, decor như Đà Lạt những năm 80s. Tuyệt vời để nghỉ ngơi, chụp hình vintage, uống cà phê sáng nhẹ.',
    img: '/tramkyuc.jpg',
  },
];

function TourDetail3() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header" id="tour-detail-cover">
        <h1>Tour Săn Mây Đà Lạt – Lưu Giữ Khoảnh Khắc Đáng Nhớ</h1>
        <p>Săn mây – không chỉ là du lịch, mà là một trải nghiệm cảm xúc. Giữa biển mây và ánh nắng đầu tiên trong ngày, bạn sẽ thấy mình thật bình yên – tự do – trọn vẹn.</p>
      </div>
      <div className="tour-detail-info">
        <h2>Thông Tin Tour Săn Mây Đà Lạt</h2>
        <ul>
          <li><b>Thời gian khởi hành:</b> 04:00 – 08:00 sáng</li>
          <li><b>Kết thúc:</b> 07:30 – 08:00</li>
          <li><b>Phương tiện:</b> Xe riêng (4 hoặc 7 chỗ)</li>
          <li><b>Đón & trả khách:</b> Tận nơi tại khách sạn</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Lịch trình chi tiết Tour Săn Mây Xe Riêng Đà Lạt</h2>
        {itinerary.map((item, idx) => (
          <div className="tour-detail-spot" key={idx}>
            <h3>{item.title}</h3>
            <img src={item.img} alt={item.title} className="tour-detail-img" />
            <p>{item.desc}</p>
          </div>
        ))}
        <div className="tour-detail-spot">
          <h3>Trở về khách sạn – kết thúc tour khoảng 7h30 – 8h00</h3>
          <p>Kết thúc chuyến đi với những kỷ niệm đáng nhớ và những bức ảnh tuyệt đẹp.</p>
        </div>
      </div>
      <div className="tour-detail-pricing">
        <h2>Bảng Giá Tour Săn Mây Bằng Xe Riêng</h2>
        <ul>
          <li><b>Xe 4 chỗ:</b> 800.000 VNĐ/ngày</li>
          <li><b>Xe 7 chỗ:</b> 1.500.000 VNĐ/ngày</li>
        </ul>
        <p><i>Giá áp dụng cho khu vực nội thành Đà Lạt. Có thể phụ thu nếu điểm đón/trả cách xa trung tâm.</i></p>
      </div>
      <div className="tour-detail-why">
        <h2>Ưu điểm vượt trội của tour xe riêng</h2>
        <ul>
          <li>Không ghép khách – hoàn toàn riêng tư</li>
          <li>Lịch trình linh hoạt, có thể thay đổi tùy nhu cầu</li>
          <li>Xe đời mới, sạch sẽ, tài xế thân thiện – hỗ trợ chụp ảnh</li>
          <li>Đưa đón tận nơi – tiết kiệm thời gian, phù hợp cả gia đình hoặc cặp đôi</li>
        </ul>
      </div>
      <div className="tour-detail-note">
        <h2>Lưu ý khi tham gia Tour Săn Mây Đà Lạt</h2>
        <ul>
          <li>Nên đặt trước ít nhất 1 ngày để giữ chỗ và chọn thời điểm săn mây đẹp nhất</li>
          <li>Mặc áo ấm vì thời tiết sáng sớm Đà Lạt khá lạnh</li>
          <li>Chuẩn bị sẵn điện thoại/máy ảnh vì góc chụp rất đẹp</li>
          <li>Có thể mang theo đồ ăn sáng nhẹ</li>
        </ul>
      </div>
      <div className="tour-detail-contact">
        <h2>Đặt Tour Ngay Hôm Nay!</h2>
        <p>Liên hệ với chúng tôi để được tư vấn và đặt tour săn mây Đà Lạt với giá tốt nhất.<br/>
        Chúng tôi cam kết mang đến cho bạn trải nghiệm du lịch Đà Lạt thật khác biệt!</p>
        <div className="tour-detail-hotline">Gọi Ngay: <a href="tel:0349290693">034 929 0693</a></div>
      </div>
    </div>
  );
}

export default TourDetail3;
