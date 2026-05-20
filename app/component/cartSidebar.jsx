import { TrashIcon } from "./icons";
import { ShoppingBagIcon } from "./icons";
import { XIcon } from "./icons";

const CartSidebar = ({ cart, isOpen, onClose, onRemove }) => {
            const total = cart.reduce((sum, item) => sum + item.price, 0);

            if (!isOpen) return null;

            return (
                <>
                    <div className="cart-overlay" onClick={onClose} />
                    <div className="cart-sidebar">
                        <div className="cart-header">
                            <h2 className="cart-title">Your Cart ({cart.length})</h2>
                            <button className="cart-close" onClick={onClose}>
                                <XIcon />
                            </button>
                        </div>
                        <div className="cart-items">
                            {cart.length === 0 ? (
                                <div className="cart-empty">
                                    <div className="cart-empty-icon">
                                        <ShoppingBagIcon />
                                    </div>
                                    <p>Your cart is empty</p>
                                    <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Add some beautiful products!</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.cartItemId ?? `${item.id}-${item.size}`} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-item-image" />
                                        <div className="cart-item-details">
                                            <p className="cart-item-name">{item.name}</p>
                                            <p className="cart-item-meta">{item.category} · {item.size}</p>
                                            <p className="cart-item-price">${item.price}</p>
                                        </div>
                                        <button className="cart-item-remove" onClick={() => onRemove(index)}>
                                            <TrashIcon />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                        {cart.length > 0 && (
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span className="cart-total-label">Total</span>
                                    <span className="cart-total-price">${total.toFixed(2)}</span>
                                </div>
                                <button className="checkout-btn">Proceed to Checkout</button>
                            </div>
                        )}
                    </div>
                </>
            );
};

export default CartSidebar;

