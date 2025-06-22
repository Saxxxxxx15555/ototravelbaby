import './TourDetail.css';

const itinerary = [
  {
    title: 'Chùa Linh Phước (Chùa Ve Chai)',
    desc: 'Một trong những ngôi chùa nổi tiếng nhất Đà Lạt với kiến trúc khảm sành độc đáo, tượng rồng dài hơn 49m, và tượng Phật bằng hoa bất tử lớn nhất Việt Nam.',
    img: '/chualinhphuoc.jpg',
  },
  {
    title: 'Thiền Viện Trúc Lâm',
    desc: 'Ngự trên đồi Phụng Hoàng, nơi giao thoa giữa trời – rừng – hồ Tuyền Lâm. Một trong ba thiền viện lớn nhất cả nước, không gian thanh tịnh và nên thơ.',
    img: '/thienvientruclam.jpg',
  },
  {
    title: 'Chùa Linh Ẩn',
    desc: 'Tọa lạc giữa núi rừng hùng vĩ, nổi bật với tượng Quan Âm Bồ Tát cao 71m – cao nhất Tây Nguyên, cùng phong cảnh thanh bình.',
    img: '/chualinhan.jpg',
  },
  {
    title: 'Dinh Bảo Đại (Dinh III)',
    desc: 'Nơi ở và làm việc của vị vua cuối cùng triều Nguyễn – kết hợp tinh thần cung đình và không gian tĩnh mịch giữa rừng thông.',
    img: '/dinhbaodai.jpg',
  },
  {
    title: 'Vườn Hoa – Tượng Phật – Các đền thờ nhỏ',
    desc: 'Không gian tâm linh hài hòa giữa kiến trúc – thiên nhiên. Nơi lý tưởng để tản bộ, chụp ảnh, hoặc thiền nhẹ.',
    img: '/nhathoconga.jpg',
  },
];

function TourDetail5() {
  return (
    <div className="tour-detail-page">
      <button className="back-btn" onClick={() => window.location.href = '/'} style={{position:'absolute',top:18,right:18,zIndex:10}}>← Quay lại</button>
      <div className="tour-detail-header" id="tour-detail-cover">
        <h1>Tour Tâm Linh Đà Lạt – Thanh Tịnh Tâm Hồn</h1>
        <p>Khám Phá Văn Hoá Phật Giáo Phố Núi</p>
      </div>
      <div className="tour-detail-intro">
        <p>Nếu bạn đang tìm kiếm một hành trình giúp lắng dịu tâm hồn, hướng về giá trị tinh thần và tìm hiểu nét đẹp văn hóa Phật giáo tại Đà Lạt – thì Tour Tâm Linh Đà Lạt chính là lựa chọn lý tưởng.</p>
      </div>
      <div className="tour-detail-info">
        <h2>Thông Tin Tour Tâm Linh Đà Lạt</h2>
        <ul>
          <li><b>Thời gian:</b> 08:00 – 16:30</li>
          <li><b>Phương tiện:</b> Xe riêng (4, 7 hoặc 16 chỗ)</li>
          <li><b>Khởi hành:</b> Hằng ngày</li>
          <li><b>Đón & trả khách:</b> Tận nơi tại khách sạn</li>
        </ul>
      </div>
      <div className="tour-detail-itinerary">
        <h2>Lịch trình tham quan Tour Tâm Linh Đà Lạt</h2>
        {itinerary.map((item, index) => (
          <div className="tour-detail-spot" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <img src={item.img} alt={item.title} className="itinerary-img" style={{width:'100%', height:'auto', borderRadius:'8px', marginBottom:'16px'}} />
          </div>
        ))}
        <div className="tour-detail-spot">
          <h3>Tùy chọn thêm các chùa/đền khác theo nhu cầu khách hàng</h3>
          <p>Lịch trình có thể điều chỉnh linh hoạt theo nhu cầu và sở thích của quý khách.</p>
        </div>
      </div>
      <div className="tour-detail-pricing">
        <h2>Bảng giá tour tâm linh xe riêng</h2>
        <ul>
          <li><b>Xe 4 chỗ:</b> 1.000.000 VNĐ</li>
          <li><b>Xe 7 chỗ:</b> 1.200.000 VNĐ</li>
        </ul>
        <p><i>Giá áp dụng cho điểm đón & trả trong nội thành Đà Lạt</i></p>
      </div>
      <div className="tour-detail-why">
        <h2>Dịch vụ bao gồm</h2>
        <ul>
          <li>Xe riêng đời mới, máy lạnh, tài xế chuyên nghiệp</li>
          <li>Đưa đón tận nơi trong nội thành</li>
          <li>Tài xế thân thiện, hỗ trợ tư vấn, chụp ảnh</li>
          <li>Vé vào cổng các điểm (nếu có)</li>
          <li>Hướng dẫn viên (nếu yêu cầu)</li>
          <li>Bảo hiểm du lịch</li>
        </ul>
      </div>
      <div className="tour-detail-note">
        <h2>Lưu ý khi đặt tour</h2>
        <ul>
          <li>Nên đặt trước ít nhất 1 ngày để đảm bảo lịch trình & xe</li>
          <li>Có thể thay đổi điểm tham quan theo nhu cầu</li>
          <li>Phụ thu nếu đón/trả ngoài trung tâm Đà Lạt</li>
        </ul>
      </div>
      <div className="tour-detail-intro">
        <h2>Trải nghiệm ý nghĩa – Hành trình tâm linh sâu sắc</h2>
        <p>Tour không chỉ là du lịch, mà là sự trở về bên trong chính mình – nơi bạn có thể hít thở nhẹ nhàng, chiêm nghiệm sâu sắc và kết nối với thiên nhiên – tôn giáo – bản thân.</p>
      </div>
      <div className="tour-detail-contact">
        <h2>Đặt Tour Ngay Hôm Nay!</h2>
        <p>Liên hệ với chúng tôi để được tư vấn và đặt tour tâm linh Đà Lạt. Chúng tôi cam kết mang đến cho bạn trải nghiệm an yên giữa rừng thông thanh tịnh!</p>
        <div className="tour-detail-hotline">Gọi Ngay: <a href="tel:0349290693">034 929 0693</a></div>
      </div>
    </div>
  );
}

export default TourDetail5;
