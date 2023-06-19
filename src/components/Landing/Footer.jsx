import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div className="content">
          <div className="footer-description">
            <span>© 2023 Mediahate</span>
          </div>
          <ul className="footer-links">
            <li><a href="#">Последние релизы</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Артисты</a></li>
            <li><a href="#">Лейбл</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
