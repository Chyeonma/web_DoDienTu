import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container container">
        {/* Logo */}
        <a href="/" className="header-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">TechZone</span>
        </a>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link active">Trang chủ</a>
          <a href="#products" className="nav-link">Sản phẩm</a>
          <a href="#categories" className="nav-link">Danh mục</a>
          <a href="#deals" className="nav-link">Khuyến mãi</a>
          <a href="#contact" className="nav-link">Liên hệ</a>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          {/* Search */}
          <div className="header-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="search-input"
            />
          </div>

          {/* Cart */}
          <button className="header-cart" aria-label="Giỏ hàng">
            <span className="cart-icon">🛒</span>
            <span className="cart-badge">3</span>
          </button>

          {/* User */}
          <button className="header-user" aria-label="Tài khoản">
            <span className="user-icon">👤</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
