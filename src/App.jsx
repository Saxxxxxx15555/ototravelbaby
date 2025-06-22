import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Slider from './Slider';
import Home from './Home';
import TourList from './TourList';
import ServiceList from './ServiceList';
import TourDetail from './TourDetail';
import TourDetail2 from './TourDetail2';
import TourDetail3 from './TourDetail3';
import TourDetail4 from './TourDetail4';
import TourDetail5 from './TourDetail5';
import ServiceAirport from './ServiceAirport';
import ServiceDalatNhaTrang from './ServiceDalatNhaTrang';
import ServiceDalatMuine from './ServiceDalatMuine';
import ServiceDalatBaoloc from './ServiceDalatBaoloc';
import ServiceDalatSaigon from './ServiceDalatSaigon';
import FloatingContact from './FloatingContact';
import Footer from './Footer';
import './App.css'
import './Footer.css';

function App() {
  const [page, setPage] = useState('home')
  const [showTourDetail, setShowTourDetail] = useState(0); // 0: none, 1: tour1, 2: tour2, 3: tour săn mây, 4: tour ngoại thành, 5: tour tâm linh
  const [showServiceAirport, setShowServiceAirport] = useState(false);
  const [showServiceDalatNhaTrang, setShowServiceDalatNhaTrang] = useState(false);
  const [showServiceDalatMuine, setShowServiceDalatMuine] = useState(false);
  const [showServiceDalatBaoloc, setShowServiceDalatBaoloc] = useState(false);
  const [showServiceDalatSaigon, setShowServiceDalatSaigon] = useState(false);

  // Scroll đến section theo id
  const scrollToSection = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  // Đóng nav mobile
  const closeNav = () => {
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) navToggle.checked = false;
  };

  return (
    <div className="container">
      <FloatingContact />
      <nav className="navbar">
        <div className="logo-wrap">
          <img src="logo.jpg" alt="Ôtô travel Đà Lạt logo" className="logo-img" />
          <span className="logo-text">Ôtô travel Đà Lạt</span>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        <ul className="nav-links">
          <li><a href="#" onClick={() => { setPage('home'); setShowTourDetail(0); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); setTimeout(() => window.scrollTo({top:0,behavior:'smooth'}), 100); closeNav(); }}>Trang Chủ</a></li>
          <li><a href="#" onClick={() => { setPage('home'); setShowTourDetail(0); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); scrollToSection('tour-section'); closeNav(); }}>Tour Du Lịch</a></li>
          <li><a href="#" onClick={() => { setPage('home'); setShowTourDetail(0); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); scrollToSection('service-section'); closeNav(); }}>Xe Dịch Vụ</a></li>
          <li><a href="#" onClick={() => { setPage('home'); setShowTourDetail(0); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); scrollToSection('footer'); closeNav(); }}>Liên Hệ</a></li>
        </ul>
      </nav>
      {showServiceAirport ? (
        <>
          <ServiceAirport />
          <Footer />
        </>
      ) : showServiceDalatNhaTrang ? (
        <>
          <ServiceDalatNhaTrang />
          <Footer />
        </>
      ) : showServiceDalatMuine ? (
        <>
          <ServiceDalatMuine />
          <Footer />
        </>
      ) : showServiceDalatBaoloc ? (
        <>
          <ServiceDalatBaoloc />
          <Footer />
        </>
      ) : showServiceDalatSaigon ? (
        <>
          <ServiceDalatSaigon />
          <Footer />
        </>
      ) : showTourDetail === 1 ? (
        <>
          <TourDetail />
          <Footer />
        </>
      ) : showTourDetail === 2 ? (
        <>
          <TourDetail2 />
          <Footer />
        </>
      ) : showTourDetail === 3 ? (
        <>
          <TourDetail3 />
          <Footer />
        </>
      ) : showTourDetail === 4 ? (
        <>
          <TourDetail4 />
          <Footer />
        </>
      ) : showTourDetail === 5 ? (
        <>
          <TourDetail5 />
          <Footer />
        </>
      ) : page === 'home' ? (
        <>
          <Slider />
          <Home />
          <div id="tour-section"><TourList onTour1Detail={() => setShowTourDetail(1)} onTour2Detail={() => setShowTourDetail(2)} onTour3Detail={() => setShowTourDetail(3)} onTour4Detail={() => setShowTourDetail(4)} onTour5Detail={() => setShowTourDetail(5)} /></div>
          <div id="service-section"><ServiceList onServiceAirportDetail={() => { setShowServiceAirport(true); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); }} onServiceDalatNhaTrangDetail={() => { setShowServiceDalatNhaTrang(true); setShowServiceAirport(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); }} onServiceDalatMuineDetail={() => { setShowServiceDalatMuine(true); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); }} onServiceDalatBaolocDetail={() => { setShowServiceDalatBaoloc(true); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatSaigon(false); }} onServiceDalatSaigonDetail={() => { setShowServiceDalatSaigon(true); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); }} /></div>
          <div id="footer"><Footer /></div>
        </>
      ) : page === 'service' ? (
        <>
          <ServiceList onServiceAirportDetail={() => { setShowServiceAirport(true); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); }} onServiceDalatNhaTrangDetail={() => { setShowServiceDalatNhaTrang(true); setShowServiceAirport(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); }} onServiceDalatMuineDetail={() => { setShowServiceDalatMuine(true); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatBaoloc(false); setShowServiceDalatSaigon(false); }} onServiceDalatBaolocDetail={() => { setShowServiceDalatBaoloc(true); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatSaigon(false); }} onServiceDalatSaigonDetail={() => { setShowServiceDalatSaigon(true); setShowServiceAirport(false); setShowServiceDalatNhaTrang(false); setShowServiceDalatMuine(false); setShowServiceDalatBaoloc(false); }} />
          <Footer />
        </>
      ) : page === 'tour' ? (
        <>
          <TourList onTour1Detail={() => setShowTourDetail(1)} onTour2Detail={() => setShowTourDetail(2)} onTour3Detail={() => setShowTourDetail(3)} onTour4Detail={() => setShowTourDetail(4)} onTour5Detail={() => setShowTourDetail(5)} />
          <Footer />
        </>
      ) : (
        <div style={{padding:'40px',textAlign:'center'}}><h2>Liên hệ</h2><p>Hotline: 0909 999 999<br/>Email: info@ototraveldalat.com</p></div>
      )}
    </div>
  )
}

export default App
