import './TourDetail.css';

const itinerary = [
  {
    title: 'Khu Du Lịch Rừng Lá Kim',
    desc: 'Điểm check-in xanh mát, hoang sơ. Không gian rừng nguyên sinh tĩnh lặng, những con đường gỗ xuyên rừng, cầu gỗ mộc mạc và thung lũng xanh tuyệt đẹp. Đây là điểm mới được giới trẻ săn đón để chụp ảnh và tận hưởng không khí trong lành.',
    img: '/runglakim.jpg',
  },
  {
    title: 'Ga Đà Lạt – Ga cổ Đông Dương đẹp nhất Việt Nam',
    desc: 'Nhà ga cổ kính mang đậm kiến trúc Pháp – một biểu tượng lâu đời của Đà Lạt. Tại đây, bạn có thể tham quan và trải nghiệm tuyến tàu cổ độc đáo đến Trại Mát (nếu có nhu cầu).',
    img: '/nhaga.jpg',
  },
  {
    title: 'Chùa Linh Phước (Chùa Ve Chai)',
    desc: 'Ngôi chùa nổi tiếng với lối kiến trúc khảm sành sứ tinh xảo, tượng Quan Âm hoa bất tử và nhiều kỷ lục độc đáo. Đây là điểm đến tâm linh đặc biệt không thể bỏ lỡ.',
    img: '/chualinhphuoc.jpg',
  },
  {
    title: 'Trạm Ký Ức – Memory Station',
    desc: 'Quán cà phê mang phong cách retro, tái hiện Đà Lạt xưa với góc décor vintage độc đáo. Thích hợp để nghỉ ngơi, chụp ảnh và thưởng thức đồ uống trong không gian đầy cảm xúc.',
    img: '/tramkyuc.jpg',
  },
  {
    title: 'Nông Trại Cún – Puppy Farm',
    desc: 'Khu tổ hợp nông trại và cà phê, nơi bạn có thể vui chơi cùng hàng chục chú chó dễ thương, tham quan vườn dâu, vườn hoa, vườn cà chua, bí ngô... thích hợp với gia đình và trẻ nhỏ.',
    img: '/nongtraicun.jpg',
  },
  {
    title: 'Dinh Bảo Đại (Dinh III)',
    desc: 'Dinh thự nghỉ dưỡng của vua Bảo Đại – vị vua cuối cùng của triều Nguyễn. Nơi đây lưu giữ kiến trúc, nội thất và dấu tích lịch sử đầy giá trị.',
    img: '/dinhbaodai.jpg',
  },
  {
    title: 'Biệt Thự Hằng Nga (Crazy House)',
    desc: 'Công trình kiến trúc kỳ dị và độc đáo bậc nhất Đà Lạt – được ví như "ngôi nhà của Alice lạc vào xứ sở thần tiên". Một điểm check-in cực chất dành cho tín đồ mê kiến trúc lạ.',
    img: '/Bietthuhangnga.jpg',
  },
];

function TourDetail2() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header">
        <h1>Tour Nội Thành Đà Lạt 1 Ngày – Trải Nghiệm Mới Lạ Cùng Xe Riêng</h1>
        <p>Khám phá những địa điểm nổi bật & mới lạ tại Đà Lạt chỉ trong 1 ngày!</p>
      </div>
      <div className="tour-detail-intro">
        <p>Tour nội thành bằng xe riêng 4–7 chỗ mang đến sự thoải mái, riêng tư, lịch trình linh hoạt – phù hợp cho gia đình, cặp đôi, nhóm bạn bè muốn khám phá Đà Lạt theo cách riêng.</p>
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
        <h2>Lịch Trình Tham Quan Tour Nội Thành Đà Lạt 1 Ngày</h2>
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
          <li>Xe riêng đời mới, điều hòa, sạch sẽ</li>
          <li>Lái xe thân thiện, hỗ trợ chụp ảnh & tư vấn địa điểm</li>
          <li>Đón – trả khách tận nơi trong trung tâm Đà Lạt</li>
          <li>Miễn phí nước suối trên xe</li>
        </ul>
        <h3>Không Bao Gồm</h3>
        <ul>
          <li>Vé vào cổng các điểm tham quan</li>
          <li>Ăn uống & chi phí cá nhân</li>
        </ul>
      </div>
      <div className="tour-detail-why">
        <h2>🔎 Tại sao nên chọn tour Đà Lạt 1 ngày bằng xe riêng?</h2>
        <ul>
          <li>Không ghép đoàn – riêng tư, thoải mái</li>
          <li>Lịch trình linh hoạt theo yêu cầu</li>
          <li>Hướng dẫn viên/lái xe hỗ trợ nhiệt tình</li>
          <li>Hỗ trợ đặt vé, quán ăn, quán cà phê view đẹp</li>
        </ul>
      </div>
      <div className="tour-detail-contact">
        <h2>Đặt Tour Ngay Hôm Nay!</h2>
        <p>Liên hệ với chúng tôi để được tư vấn và đặt tour Đà Lạt 1 ngày với giá tốt nhất.<br/>
        Chúng tôi cam kết mang đến cho bạn trải nghiệm du lịch Đà Lạt thật khác biệt!</p>
        <div className="tour-detail-hotline">Gọi Ngay: <a href="tel:0349290693">034 929 0693</a></div>
      </div>
    </div>
  );
}

export default TourDetail2;
