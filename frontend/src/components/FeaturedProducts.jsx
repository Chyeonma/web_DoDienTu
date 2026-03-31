import ProductCard from './ProductCard';
import './FeaturedProducts.css';

const products = [
  {
    image: '💻',
    name: 'MacBook Air M3 15"',
    category: 'Laptop',
    price: '32.990.000₫',
    oldPrice: '37.990.000₫',
    rating: 5,
    reviews: 234,
    badge: { type: 'sale', text: 'Giảm 13%' },
  },
  {
    image: '📱',
    name: 'iPhone 16 Pro Max 256GB',
    category: 'Điện thoại',
    price: '33.490.000₫',
    oldPrice: '34.990.000₫',
    rating: 5,
    reviews: 567,
    badge: { type: 'hot', text: 'Hot' },
  },
  {
    image: '🎧',
    name: 'Sony WH-1000XM5',
    category: 'Tai nghe',
    price: '6.990.000₫',
    oldPrice: '8.490.000₫',
    rating: 5,
    reviews: 189,
    badge: { type: 'sale', text: 'Giảm 18%' },
  },
  {
    image: '⌚',
    name: 'Apple Watch Ultra 2',
    category: 'Đồng hồ',
    price: '21.990.000₫',
    rating: 4,
    reviews: 145,
    badge: { type: 'new', text: 'Mới' },
  },
  {
    image: '🖥️',
    name: 'Samsung Odyssey G9 49"',
    category: 'Màn hình',
    price: '28.990.000₫',
    oldPrice: '35.990.000₫',
    rating: 5,
    reviews: 98,
    badge: { type: 'sale', text: 'Giảm 19%' },
  },
  {
    image: '📷',
    name: 'Sony Alpha A7 IV',
    category: 'Máy ảnh',
    price: '48.990.000₫',
    rating: 5,
    reviews: 76,
    badge: null,
  },
  {
    image: '🎮',
    name: 'PlayStation 5 Slim',
    category: 'Gaming',
    price: '12.990.000₫',
    oldPrice: '14.490.000₫',
    rating: 5,
    reviews: 312,
    badge: { type: 'hot', text: 'Bán chạy' },
  },
  {
    image: '⌨️',
    name: 'Logitech MX Keys S',
    category: 'Phụ kiện',
    price: '2.690.000₫',
    rating: 4,
    reviews: 203,
    badge: { type: 'new', text: 'Mới' },
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sản Phẩm Nổi Bật</h2>
          <p className="section-subtitle">
            Những sản phẩm công nghệ được yêu thích nhất
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>

        <div className="products-cta">
          <a href="#" className="btn btn-outline btn-lg">
            Xem tất cả sản phẩm →
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
