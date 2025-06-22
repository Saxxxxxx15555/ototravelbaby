import './TourDetail.css';

const itinerary = [
  {
    title: 'Cổng Trời Bali – Green Hills',
    desc: 'Check-in tại địa điểm sống ảo nổi tiếng với khung cảnh núi rừng thơ mộng, kiến trúc độc đáo mang phong cách Bali.',
    img: '/Congtroibali.jpg',
  },
  {
    title: 'Thác Datanla – Trượt Máng Siêu Tốc',
    desc: 'Trải nghiệm trò chơi máng trượt hấp dẫn nhất Đà Lạt, len lỏi qua rừng thông, tận hưởng cảm giác mạnh và thiên nhiên tươi mát.',
    img: '/mangtruot.jpg',
  },
  {
    title: 'Thiền Viện Trúc Lâm',
    desc: 'Ngôi thiền viện lớn và yên bình nhất Đà Lạt, nằm bên hồ Tuyền Lâm – nơi lý tưởng để thư giãn và ngắm cảnh.',
    img: '/thienvientruclam.jpg',
  },
  {
    title: 'Dinh Bảo Đại',
    desc: 'Tham quan dinh thự cổ kính của vị vua cuối cùng triều Nguyễn – nơi lưu giữ nhiều dấu ấn lịch sử quý giá.',
    img: '/dinhbaodai.jpg',
  },
  {
    title: 'Nhà Ga Đà Lạt – Ga Cổ Đông Dương',
    desc: 'Khám phá nhà ga cổ nhất Việt Nam với kiến trúc Pháp đặc trưng, không gian hoài cổ và chuyến tàu cổ ấn tượng.',
    img: '/nhaga.jpg',
  },
  {
    title: 'Chùa Linh Phước (Chùa Ve Chai)',
    desc: 'Ngôi chùa nổi tiếng với kiến trúc khảm sành độc đáo, tượng Quan Âm bằng hoa bất tử và nhiều kỷ lục Việt Nam.',
    img: '/chualinhphuoc.jpg',
  },
];

function TourDetail() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-cover" id="tour-detail-cover">
        <img src="/noithanhdalat.jpg" alt="Ảnh đại diện Tour Đà Lạt" className="tour-detail-cover-img" style={{width:'100%',maxHeight:'320px',objectFit:'cover',objectPosition:'center',borderRadius:'18px',marginBottom:'24px',boxShadow:'0 4px 24px rgba(0,0,0,0.12)'}} />
      </div>
      <div className="tour-detail-header">
        <h1>Tour Đà Lạt 1 Ngày – Trọn Vẹn Vẻ Đẹp Phố Núi</h1>
        <p>Khám phá nội thành Đà Lạt với lịch trình linh hoạt, không ghép đoàn, đón trả tận nơi</p>
      </div>
      <div className="tour-detail-intro">
        <p>Bạn đang tìm một tour Đà Lạt 1 ngày tiện lợi, thoải mái, riêng tư?<br/>
        Chúng tôi cung cấp dịch vụ xe du lịch riêng tham quan các điểm nổi bật nhất của nội thành Đà Lạt – phù hợp cho gia đình, cặp đôi hoặc nhóm bạn bè.</p>
      </div>
      <div className="tour-detail-info">
        <h2>Thông Tin Tour Nội Thành Đà Lạt (1 Ngày)</h2>
        <ul>
          <li><b>Thời gian:</b> 08:00 – 17:00</li>
          <li><b>Phương tiện:</b> Xe riêng (4 hoặc 7 chỗ)</li>
          <li><b>Khởi hành:</b> Hằng ngày</li>
          <li><b>Đón & trả khách:</b> Tận nơi tại khách sạn</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Lịch Trình Tham Quan Tour Đà Lạt 1 Ngày</h2>
        {itinerary.map((item, idx) => (
          <div className="tour-detail-spot" key={idx}>
            <h3>{item.title}</h3>
            <img src={item.img} alt={item.title} className="tour-detail-img" />
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="tour-detail-pricing">
        <h2>Giá Tour Trọn Gói (Thuê Xe Riêng Theo Ngày)</h2>
        <ul>
          <li><b>Xe 4 chỗ:</b> 1.000.000 VNĐ/ngày</li>
          <li><b>Xe 7 chỗ:</b> 1.200.000 VNĐ/ngày</li>
        </ul>
        <h3>Giá Tour Bao Gồm</h3>
        <ul>
          <li>Xe riêng đời mới, máy lạnh, tài xế kinh nghiệm, thân thiện</li>
          <li>Đón và trả khách tận nơi tại khách sạn trung tâm Đà Lạt</li>
          <li>Hỗ trợ tư vấn lịch trình & check-in chụp hình tại các điểm (nếu cần)</li>
          <li>Miễn phí 01 chai nước suối/người</li>
        </ul>
        <h3>Không Bao Gồm</h3>
        <ul>
          <li>Vé vào cổng các điểm tham quan</li>
          <li>Ăn uống, chi phí cá nhân khác</li>
        </ul>
      </div>
      <div className="tour-detail-why">
        <h2>Tại sao nên chọn tour Đà Lạt 1 ngày bằng xe riêng?</h2>
        <ul>
          <li>Thoải mái về thời gian, lịch trình linh hoạt</li>
          <li>Không gộp tour, không ghép đoàn – riêng tư tối đa</li>
          <li>Phù hợp với gia đình có trẻ nhỏ, người lớn tuổi</li>
          <li>Tự do check-in, nghỉ ngơi, ăn uống theo sở thích</li>
        </ul>
      </div>
      <div className="tour-detail-contact">
        <h2>Đặt Tour Ngay Hôm Nay!</h2>
        <p>Liên hệ với chúng tôi để được tư vấn và đặt tour Đà Lạt 1 ngày với giá tốt nhất.<br/>
        Chúng tôi cam kết mang đến cho bạn trải nghiệm du lịch Đà Lạt tuyệt vời nhất!</p>
        <div className="tour-detail-hotline">Gọi Ngay: <a href="tel:0349290693">034 929 0693</a></div>
      </div>
    </div>
  );
}

export default TourDetail;
