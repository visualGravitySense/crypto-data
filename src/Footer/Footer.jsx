import React from 'react';
import './Footer.scss';
import { FaTelegram, FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="footer-container">
        {/* <div className="footer-links">
          <a href="/about">О платформе</a>
          <a href="/contact">Контакты</a>
          <a href="/privacy-policy">Политика конфиденциальности</a>
          <a href="/terms-of-use">Условия использования</a>
        </div> */}
        <div className="footer-social">
          <a href="https://github.com/visualGravitySense/crypto-data" target="_blank" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dmitri-gornakov-7a664840/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://t.me/digoNews" target="_blank" aria-label="Telegram"><FaTelegram /></a>
          {/* <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a> */}
        </div>

        {/* Footer subscribe */}
        {/* <div className="footer-subscribe">
          <form>
            <input type="email" placeholder="Ваш email" required />
            <button type="submit">Подписаться</button>
          </form>
        </div> */}

        <div className="footer-info">
          <p><strong>Crypto Community</strong></p>

          <p>
                <strong>
                <a href="mailto:dmitri.gornakov@gmail.com"></a>
                </strong>
            </p>
            
          <p>&copy; {new Date().getFullYear()} Creative Technologies | Bison Wise</p>

          {/* <p>Контакты: dmitri.gornakov@gmail.com</p> */}

          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
