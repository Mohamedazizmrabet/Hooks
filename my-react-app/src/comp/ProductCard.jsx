import React from 'react';

function ProductCard({ product }) {
  const { id, title, price, description, category, image } = product; // Destructure props

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description.slice(0, 100)}...</p>  
      <span className="price">${price.toFixed(2)}</span>
      <button>Add to Cart</button>  
    </div>
  );
}

export default ProductCard;
