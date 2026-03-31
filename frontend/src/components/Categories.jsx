import './Categories.css';

const categories = [
  { icon: '💻', name: 'Laptop', count: '250+ sản phẩm', color: '#6c5ce7' },
  { icon: '📱', name: 'Điện thoại', count: '180+ sản phẩm', color: '#00cec9' },
  { icon: '🎧', name: 'Phụ kiện', count: '400+ sản phẩm', color: '#fdcb6e' },
  { icon: '⌚', name: 'Đồng hồ', count: '120+ sản phẩm', color: '#ff6b6b' },
  { icon: '📷', name: 'Máy ảnh', count: '90+ sản phẩm', color: '#74b9ff' },
  { icon: '🖥️', name: 'Màn hình', count: '150+ sản phẩm', color: '#a29bfe' },
];

function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Danh Mục Sản Phẩm</h2>
          <p className="section-subtitle">
            Khám phá các danh mục công nghệ hàng đầu
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <a href="#" className="category-card" key={index} style={{ '--cat-color': cat.color }}>
              <div className="category-icon-wrapper">
                <span className="category-icon">{cat.icon}</span>
              </div>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-count">{cat.count}</p>
              <span className="category-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
