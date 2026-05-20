import { useState } from "react";

import { SparklesIcon } from "./icons";
import { ShoppingBagIcon } from "./icons";
import { XIcon } from "./icons";
import { StarIcon } from "./icons";

const sizes = ["10mg", "20mg", "30mg", "40mg", "50mg"];

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("20mg");

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <XIcon />
        </button>
        <div className="modal-body">
          <div className="modal-image-section">
            <img
              src={product.image}
              alt={product.name}
              className="modal-image"
            />
          </div>
                            <div className="modal-details">
                                <p className="modal-category">{product.category}</p>
                                <h2 className="modal-title">{product.name}</h2>
                                <div className="modal-price-rating">
                                    <span className="modal-price">${product.price}</span>
                                    <div className="product-rating">
                                        <StarIcon filled={true} />
                                        <span>{product.rating}</span>
                                        <span style={{ color: '#9aaa9e', marginLeft: '4px' }}>({product.reviews} reviews)</span>
                                    </div>
                                </div>
                                <p className="modal-description">{product.description}</p>

                                <div className="how-it-works">
                                    <div className="how-it-works-title">
                                        <SparklesIcon />
                                        How It Works
                                    </div>
                                    <ul className="how-it-works-list">
                                        {product.howItWorks.map((step, i) => (
                                            <li key={i}>{step}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-size-section">
                                    <p className="modal-size-label">Select Size</p>
                                    <div className="size-selector">
                                        {sizes.map(size => (
                                            <button
                                                key={size}
                                                className={`size-btn ${selectedSize === size ? 'active-size' : ''}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button 
                                    className="modal-add-btn"
                                    onClick={() => { onAddToCart(product, selectedSize); onClose(); }}
                                >
                                    <ShoppingBagIcon /> Add to Cart — ${product.price}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
};

export default ProductModal;
