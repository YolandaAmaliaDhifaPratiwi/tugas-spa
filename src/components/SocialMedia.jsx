import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <div className="social-media" style={{ display: 'flex', gap: '10px' }}>
      <a
        href="https://instagram.com/username" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#E1306C', fontSize: '24px' }}
      >
        <FaInstagram />
      </a>

      <a
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#25D366', fontSize: '24px' }}
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://linkedin.com/in/username" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#0077B5', fontSize: '24px' }}
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
