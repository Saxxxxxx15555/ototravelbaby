import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-multicol">
      <div className="footer-multicol__container">
        <div className="footer-multicol__col logo-col">
          <img src="/logo.jpg" alt="Ôtô travel Đà Lạt logo" className="footer-logo" />
          <div className="footer-company">
            <b>Ôtô travel Đà Lạt</b>
            <div>Hotline: <a href="tel:0349290693">034 929 0693</a></div>
            <div>Email: <a href="mailto:truongnhuanson290693@gmail.com">truongnhuanson290693@gmail.com</a></div>
          </div>
        </div>
        <div className="footer-multicol__col tour-col">
          <div className="footer-title">Tour nổi bật</div>
          <ul>
            <li><a href="#tour-section">Tour Đà Lạt 1 Ngày</a></li>
            <li><a href="#tour-section">Tour Săn Mây</a></li>
            <li><a href="#tour-section">Tour Ngoại Thành</a></li>
            <li><a href="#tour-section">Tour Tâm Linh</a></li>
          </ul>
        </div>
        <div className="footer-multicol__col link-col">
          <div className="footer-title">Liên kết</div>
          <ul>
            <li><a href="#">Trang Chủ</a></li>
            <li><a href="#tour-section">Tour Du Lịch</a></li>
            <li><a href="#service-section">Xe Dịch Vụ</a></li>
            <li><a href="#footer">Liên Hệ</a></li>
          </ul>
        </div>
        <div className="footer-multicol__col social-col">
          <div className="footer-title">Kết nối</div>
          <div className="footer-socials">
            <a href="https://zalo.me/0349290693" target="_blank" rel="noopener noreferrer" title="Zalo">
              <img src="/zalo-icon.png" alt="Zalo" style={{width:'36px',height:'36px'}} className="footer-social-icon" />
            </a>
            <a href="https://www.messenger.com/t/61556518239947" target="_blank" rel="noopener noreferrer" title="Messenger">
              <img src="/messenger-icon.png" alt="Messenger" className="footer-social-icon" />
            </a>
            <a href="https://wa.me/84349290693" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="footer-social-icon" />
            </a>
            <a href="https://www.facebook.com/share/v/1ALX2vwp3L/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <img src="/fb.png" alt="Facebook" style={{width:'36px',height:'36px'}} className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-multicol__bottom">
        <span>&copy; {new Date().getFullYear()} Ôtô travel Đà Lạt. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
