import React from 'react';
import './FloatingContact.css';

function FloatingContact() {
  return (
    <div className="floating-contact">
      <a href="https://zalo.me/0349290693" className="contact-btn zalo" target="_blank" rel="noopener noreferrer" title="Chat Zalo">
        <img src="/zalo-icon.png" alt="Zalo" style={{width: '36px', height: '36px', objectFit: 'contain'}} />
      </a>
      <a href="tel:0349290693" className="contact-btn call" title="Gọi điện">
        <img src="/call-icon.png" alt="Gọi điện" style={{width: '36px', height: '36px'}} />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61556518239947" className="contact-btn messenger" target="_blank" rel="noopener noreferrer" title="Messenger">
        <img src="/messenger-icon.png" alt="Messenger" style={{width: '36px', height: '36px'}} />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61556518239947" className="contact-btn facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
        <img src="/fb.png" alt="Facebook" style={{width: '36px', height: '36px'}} />
      </a>
    </div>
  );
}

export default FloatingContact;
