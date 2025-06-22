import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="home-banner">
        <h2>Chào mừng đến với Ôtô travel Đà Lạt</h2>
        <p>Đơn vị tổ chức tour du lịch và dịch vụ xe uy tín tại Đà Lạt</p>
      </div>
      <div className="home-policies" style={{display:'block', maxWidth: 480, margin: '36px auto 24px auto'}}>
        <div className="home-policy-item" style={{display:'block', boxShadow:'none', background:'none', padding:'0', marginBottom:'18px'}}>
          <div className="home-policy-title" style={{fontSize:'1.08rem',fontWeight:700,color:'#1e90ff',margin:'0 0 2px 0',textTransform:'uppercase',letterSpacing:'0.5px'}}>Tour đa dạng</div>
          <div className="home-policy-desc" style={{fontSize:'1rem',color:'#444',margin:0}}>Nhiều lựa chọn tour hấp dẫn, phù hợp mọi nhu cầu.</div>
        </div>
        <div className="home-policy-item" style={{display:'block', boxShadow:'none', background:'none', padding:'0', marginBottom:'18px'}}>
          <div className="home-policy-title" style={{fontSize:'1.08rem',fontWeight:700,color:'#1e90ff',margin:'0 0 2px 0',textTransform:'uppercase',letterSpacing:'0.5px'}}>Xe đời mới</div>
          <div className="home-policy-desc" style={{fontSize:'1rem',color:'#444',margin:0}}>Dàn xe chất lượng, an toàn, phục vụ tận nơi.</div>
        </div>
        <div className="home-policy-item" style={{display:'block', boxShadow:'none', background:'none', padding:'0', marginBottom:'18px'}}>
          <div className="home-policy-title" style={{fontSize:'1.08rem',fontWeight:700,color:'#1e90ff',margin:'0 0 2px 0',textTransform:'uppercase',letterSpacing:'0.5px'}}>Hỗ trợ 24/7</div>
          <div className="home-policy-desc" style={{fontSize:'1rem',color:'#444',margin:0}}>Đội ngũ tư vấn nhiệt tình, hỗ trợ khách hàng mọi lúc.</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
