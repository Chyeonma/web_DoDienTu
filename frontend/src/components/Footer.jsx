import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">TechZone</span>
            </a>
            <p className="footer-description">
              Cửa hàng công nghệ hàng đầu Việt Nam. Cung cấp sản phẩm chính hãng
              với giá tốt nhất và dịch vụ hậu mãi chu đáo.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📸</a>
              <a href="#" className="social-link" aria-label="YouTube">🎬</a>
              <a href="#" className="social-link" aria-label="TikTok">🎵</a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4 className="footer-title">Sản phẩm</h4>
            <ul>
              <li><a href="#">Laptop</a></li>
              <li><a href="#">Điện thoại</a></li>
              <li><a href="#">Phụ kiện</a></li>
              <li><a href="#">Đồng hồ thông minh</a></li>
              <li><a href="#">Máy ảnh</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Hỗ trợ</h4>
            <ul>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Phương thức thanh toán</a></li>
              <li><a href="#">Vận chuyển</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-title">Liên hệ</h4>
            <ul>
              <li>
                <span className="contact-icon">📍</span>
                <span>123 Nguyễn Huệ, Q.1, TP.HCM</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>1900 1234</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>support@techzone.vn</span>
              </li>
              <li>
                <span className="contact-icon">🕐</span>
                <span>8:00 - 22:00 (T2 - CN)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2026 TechZone. Tất cả quyền được bảo lưu.</p>
          <div className="footer-bottom-links">
            <a href="#">Điều khoản sử dụng</a>
            <a href="#">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
