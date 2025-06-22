import './TourDetail.css';

const itinerary = [
  {
    title: 'Cổng Trời Bali – Green Hills',
    desc: 'Biểu tượng sống ảo không thể bỏ qua! Với thiết kế mô phỏng "cổng trời" nổi tiếng Indonesia, nơi đây mang lại những bức ảnh check-in cực ấn tượng giữa thiên nhiên núi rừng Đà Lạt.',
    img: '/Congtroibali.jpg',
  },
  {
    title: 'Nông Trại Cún – Puppy Farm',
    desc: 'Thiên đường dành cho người yêu động vật và trẻ nhỏ. Bạn có thể vui đùa cùng hàng chục chú cún siêu dễ thương, check-in tại vườn hoa, vườn dâu và cà phê sân vườn mát mẻ.',
    img: '/nongtraicun.jpg',
  },
  {
    title: 'Cao Nguyên Hoa – Sắc hoa bất tận giữa rừng thông',
    desc: 'Khu du lịch kết hợp giữa rừng thông, suối nước trong veo và các tiểu cảnh hoa rực rỡ. Tại đây, bạn có thể thuê trang phục cổ trang để chụp những bộ ảnh đậm chất điện ảnh.',
    img: '/Caonguyenhoa.jpg',
  },
  {
    title: 'Mộng Đào Nguyên – Mongoland',
    desc: 'Không gian giải trí, sống ảo cực kỳ hot tại Đà Lạt. Với concept cổ tích, khu đồi thỏ, xe ngựa, tổ chim khổng lồ, thung lũng mây và các trạm ảnh độc đáo, nơi đây phù hợp cho các bạn trẻ yêu sự sáng tạo.',
    img: '/Mongdaonguyen.jpg',
  },
  {
    title: 'Hoa Trong Rừng – Check-in giữa thiên nhiên nguyên sơ',
    desc: 'Một khu du lịch sinh thái mang phong cách vintage, điểm nhấn là những góc ảnh cổ điển pha chút hoang dã. Thích hợp cho ai tìm kiếm sự yên tĩnh giữa rừng thông.',
    img: '/Hoatrongrung.jpg',
  },
  {
    title: 'Thung Lũng Các Vị Thần – Valleys of Gods',
    desc: 'Tọa độ chill cực hot của giới trẻ Đà Lạt. Quán cà phê – khu nghỉ view đồi cực chất, nơi bạn có thể thưởng thức đồ uống, sống chậm giữa thiên nhiên và săn mây khi thời tiết thuận lợi.',
    img: '/thunglungcacvithan.jpg',
  },
];

function TourDetail4() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header">
        <h1>Tour Ngoại Thành Đà Lạt 1 Ngày – Khám Phá Thiên Nhiên & Sống Ảo Cực Chất</h1>
        <p>Khám phá những địa điểm check-in hot nhất & mới lạ tại Đà Lạt chỉ trong 1 ngày!</p>
      </div>
      <div className="tour-detail-intro">
        <p>Bạn muốn khám phá Đà Lạt một cách tự do, riêng tư và trọn vẹn chỉ trong 1 ngày?<br/>
        Hãy chọn tour ngoại thành bằng xe riêng – không ghép đoàn, thoải mái sống ảo, tận hưởng thiên nhiên trong lành và được hỗ trợ chụp ảnh chuyên nghiệp!</p>
      </div>
      <div className="tour-detail-info">
        <h2>Thông Tin Tour Ngoại Thành Đà Lạt (1 Ngày)</h2>
        <ul>
          <li><b>Thời gian:</b> 08:00 – 17:00</li>
          <li><b>Phương tiện:</b> Xe riêng (4 hoặc 7 chỗ)</li>
          <li><b>Khởi hành:</b> Hằng ngày</li>
          <li><b>Đón & trả khách:</b> Tận nơi tại khách sạn</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Lịch Trình Check-in & Khám Phá Chi Tiết</h2>
        {itinerary.map((item, idx) => (
          <div className="tour-detail-spot" key={idx}>
            <h3>{item.title}</h3>
            <img src={item.img} alt={item.title} className="tour-detail-img" />
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="tour-detail-pricing">
        <h2>Giá Tour Trọn Gói Xe Riêng Theo Ngày</h2>
        <ul>
          <li><b>Xe 4 chỗ:</b> 1.200.000 VNĐ/ngày</li>
          <li><b>Xe 7 chỗ:</b> 1.400.000 VNĐ/ngày</li>
        </ul>
        <p><i>Lưu ý: Giá tính theo xe – không tính theo đầu người. Phù hợp cho nhóm 2–6 người.</i></p>
        <h3>Giá Tour Bao Gồm</h3>
        <ul>
          <li>Xe riêng đời mới – đưa đón tận nơi tại khách sạn khu vực trung tâm Đà Lạt</li>
          <li>Lái xe kiêm hướng dẫn viên địa phương: vui vẻ, hỗ trợ check-in, tư vấn lịch trình</li>
          <li>Nước suối miễn phí trên xe</li>
          <li>Hỗ trợ chụp ảnh sống ảo tại các điểm tham quan</li>
          <li>Tour riêng tư – không ghép đoàn</li>
        </ul>
        <h3>Không Bao Gồm</h3>
        <ul>
          <li>Vé vào cổng các điểm tham quan (nếu có)</li>
          <li>Ăn uống cá nhân</li>
          <li>Thuê trang phục (nếu khách có nhu cầu)</li>
        </ul>
      </div>
      <div className="tour-detail-why">
        <h2>Tại Sao Chọn Tour Xe Riêng Của Chúng Tôi?</h2>
        <ul>
          <li>Không ghép đoàn – lịch trình linh hoạt theo sở thích</li>
          <li>Chụp ảnh chuyên nghiệp – tài xế hỗ trợ nhiệt tình</li>
          <li>Tiết kiệm chi phí nếu đi nhóm 3–6 người</li>
          <li>Khám phá những góc Đà Lạt mới lạ, ít người biết</li>
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

export default TourDetail4;
