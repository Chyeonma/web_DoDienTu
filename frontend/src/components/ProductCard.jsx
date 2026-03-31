import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.badge && (
        <span className={`product-badge badge-${product.badge.type}`}>
          {product.badge.text}
        </span>
      )}

      <div className="product-image">
        <span className="product-emoji">{product.image}</span>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <span className="rating-stars">{'⭐'.repeat(product.rating)}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>

        <div className="product-pricing">
          {product.oldPrice && (
            <span className="product-old-price">{product.oldPrice}</span>
          )}
          <span className="product-price">{product.price}</span>
        </div>
      </div>

      <div className="product-actions">
        <button className="product-btn product-btn-cart">
          🛒 Thêm vào giỏ
        </button>
        <button className="product-btn product-btn-fav" aria-label="Yêu thích">
          ♡
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
