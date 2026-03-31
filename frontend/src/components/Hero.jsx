import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            🔥 Khuyến mãi mùa hè - Giảm đến 50%
          </div>

          <h1 className="hero-title">
            Công Nghệ <span className="highlight">Đỉnh Cao</span>
            <br />
            Giá Cả <span className="highlight">Tốt Nhất</span>
          </h1>

          <p className="hero-description">
            Khám phá bộ sưu tập laptop, điện thoại, phụ kiện công nghệ mới nhất
            với giá ưu đãi độc quyền. Giao hàng miễn phí toàn quốc.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              <span>Mua Ngay</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#categories" className="btn btn-outline">
              Xem Danh Mục
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Sản phẩm</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Khách hàng</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9⭐</span>
              <span className="stat-label">Đánh giá</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-glow"></div>
            <div className="hero-product-showcase">
              <div className="showcase-icon">💻</div>
              <div className="showcase-info">
                <span className="showcase-tag">Bán chạy #1</span>
                <h3 className="showcase-name">MacBook Pro M3</h3>
                <p className="showcase-spec">16" • 36GB RAM • 1TB SSD</p>
                <div className="showcase-price">
                  <span className="price-old">52.990.000₫</span>
                  <span className="price-new">45.990.000₫</span>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="floating-card floating-1">
            <span>📱</span> iPhone 16 Pro Max
          </div>
          <div className="floating-card floating-2">
            <span>🎧</span> AirPods Pro 2
          </div>
          <div className="floating-card floating-3">
            <span>⌚</span> Apple Watch Ultra
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
