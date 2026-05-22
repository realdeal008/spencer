import { useState } from "react"


import { ShoppingBagIcon, PlusIcon, StarIcon, CheckIcon } from "./icons";
import { getPriceForSize } from "./productData";

const sizes = [
  "10mg",
  "20mg",
  "30mg",
  "40mg",
  "50mg",
];

const ProductCard = ({
  product,
  onOpenModal,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] =
    useState("20mg");

  const [isAdded, setIsAdded] =
    useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();

    onAddToCart(product, selectedSize);

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div
      className="product-card"
      onClick={() => onOpenModal(product)}
    >
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="product-category-tag">
          {product.category}
        </span>

        <button
          className="product-quick-add"
          onClick={handleAdd}
        >
          <PlusIcon />
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-meta">
          <span className="product-price">
            ${getPriceForSize(product, selectedSize)}
          </span>

          <div className="product-rating">
            <StarIcon filled />

            <span>{product.rating}</span>

            <span
              style={{
                color: "#9aaa9e",
                marginLeft: "4px",
              }}
            >
              ({product.reviews})
            </span>
          </div>
        </div>

        <div className="size-selector">
          {sizes.map((size) => (
            <button
              key={size}
              className={`size-btn ${
                selectedSize === size
                  ? "active-size"
                  : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(size);
              }}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          className={`add-to-cart-btn ${
            isAdded ? "added" : ""
          }`}
          onClick={handleAdd}
        >
          {isAdded ? (
            <>
              <CheckIcon />
              Added
            </>
          ) : (
            <>
              <ShoppingBagIcon />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;