"use client";

import { useState, useCallback } from "react";

import ProductCard from "./productCard";
import ProductModal from "./productModal";
import CartSidebar from "./cartSidebar";
import Toast from "./toast";

import { ShoppingBagIcon } from "./icons";
import { productsData } from "./productData";

const filters = [
  { label: "All", value: "all" },
  { label: "Growth", value: "growth" },
  { label: "metabolic", value: "metabolic" },
  { label: "performance", value: "performance" },
  { label: "recovery", value: "recovery" },
  { label: "hormonal", value: "hormonal" },
  { label: "support", value: "support" },
  { label: "longevity", value: "longevity" },
  { label: "cognitive", value: "cognitive" },
  { label: "immune", value: "immune" },
  { label: "skincare", value: "skincare" },
  { label: "research", value: "research" },
];

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    visible: false,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData
    .filter((p) =>
      activeFilter === "all"
        ? true
        : p.category === activeFilter
    )
    .filter((p) => {
      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;
      return p.name.toLowerCase().includes(q);
    });


  const showToast = useCallback((message) => {
    setToast({
      message,
      visible: true,
    });

    setTimeout(() => {
      setToast({
        message: "",
        visible: false,
      });
    }, 2500);
  }, []);

  const addToCart = useCallback(
    (product, size) => {
      setCart((prev) => [
        ...prev,
        {
          ...product,
          size,
          // Ensure cart items always have a unique identity.
          // This prevents React key collisions when the same product+size is added multiple times.
          cartItemId: `${product.id}-${size}-${Date.now()}-${Math.random()}`,
        },
      ]);

      showToast(
        `${product.name} (${size}) added to cart!`
      );
    },
    [showToast]
  );

  const removeFromCart = useCallback((index) => {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }, []);

  return (
    <>
      <section
        id="products"
        className="products-section"
      >
        <div className="products-container">
          <div className="products-header">
            <div>
              <p className="products-subtitle">
                Products
              </p>

              <h2 className="products-title">
                Precision Compounds
              </h2>
            </div>

            <div className="header-right">
              <div className="filter-wrapper">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    className={`filter-btn ${
                      activeFilter === filter.value
                        ? "active-filter"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveFilter(filter.value)
                    }
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="search-wrapper">
                <input
                  id="products-search-input"
                  className="products-search-input"
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button
                className="cart-icon-wrapper"
                onClick={() =>
                  setIsCartOpen(true)
                }
              >
                <ShoppingBagIcon />

                {cart.length > 0 && (
                  <span className="cart-badge">
                    {cart.length}
                  </span>
                )}
              </button>

            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={setSelectedProduct}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() =>
            setSelectedProduct(null)
          }
          onAddToCart={addToCart}
        />
      )}

      <CartSidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() =>
          setIsCartOpen(false)
        }
        onRemove={removeFromCart}
      />

      <Toast
        message={toast.message}
        isVisible={toast.visible}
      />
    </>
  );
};

export default ProductsSection;