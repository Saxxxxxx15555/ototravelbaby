import './TourList.css';

const tours = [
  {
    title: 'Tour Đà Lạt 1 Ngày – Trọn Vẹn Vẻ Đẹp Phố Núi',
    desc: 'Xe riêng tham quan nội thành Đà Lạt với giá cả hợp lý',
    price: '1.000.000đ/ngày',
    img: '/tour1.jpg',
  },
  {
    title: 'Tour Nội Thành Đà Lạt 1 Ngày',
    desc: 'Trải nghiệm mới lạ cùng xe riêng, khám phá những điểm đến độc đáo của Đà Lạt',
    price: '1.000.000đ/ngày',
    img: '/tour2.jpg',
  },
  {
    title: 'Tour Ngoại Thành Đà Lạt 1 Ngày',
    desc: 'Khám phá thiên nhiên & sống ảo cực chất với những điểm check-in hot nhất',
    price: '1.200.000đ/ngày',
    img: '/tour3.jpg',
  },
  {
    title: 'Tour Săn Mây – Đón Bình Minh Đà Lạt',
    desc: 'Trải nghiệm thiên đường mây và check-in cực chill giữa biển mây bồng bềnh',
    price: '800.000đ/ngày',
    img: '/tour4.jpg',
  },
  {
    title: 'Tour Tâm Linh Đà Lạt',
    desc: 'Thanh tịnh tâm hồn, khám phá văn hoá Phật giáo phố núi',
    price: '1.000.000đ/ngày',
    img: '/tour5.jpg',
  },
];

function TourList({ onTour1Detail, onTour2Detail, onTour3Detail, onTour4Detail, onTour5Detail }) {
  return (
    <section className="tour-section">
      <h2 className="tour-title">Tour Du Lịch Đà Lạt</h2>
      <div className="tour-list">
        {tours.map((tour, idx) => (
          <div className="tour-card" key={idx}>
            <img src={tour.img} alt={tour.title} className="tour-img" />
            <h3>{tour.title}</h3>
            <p>{tour.desc}</p>
            <div className="tour-price">{tour.price}</div>
            <button className="tour-btn" onClick={
              idx === 0 && onTour1Detail ? onTour1Detail :
              idx === 1 && onTour2Detail ? onTour2Detail :
              idx === 2 && onTour4Detail ? onTour4Detail :
              idx === 3 && onTour3Detail ? onTour3Detail :
              idx === 4 && onTour5Detail ? onTour5Detail : undefined
            }>
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TourList;
