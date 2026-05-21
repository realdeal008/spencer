

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { TrashIcon } from "./icons";
import { ShoppingBagIcon } from "./icons";
import { XIcon } from "./icons";

// ================= PAYMENT METHOD ICONS =================

const ChimeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#20C997"/>
    <path d="M8 16C8 11.58 11.58 8 16 8C20.42 8 24 11.58 24 16C24 20.42 20.42 24 16 24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 24C13.5 24 11.5 22 11.5 19.5C11.5 17 13.5 15 16 15C18.5 15 20.5 17 20.5 19.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const PayPalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#003087"/>
    <path d="M12 24L13.5 14H17C19.5 14 21 12.5 21 10.5C21 8.5 19.5 7 17 7H10L8 24H12Z" fill="white"/>
    <path d="M14 24L15.5 14H19C21.5 14 23 12.5 23 10.5C23 8.5 21.5 7 19 7H12L10 24H14Z" fill="#009CDE"/>
  </svg>
);

const BitcoinIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#F7931A"/>
    <path d="M22.5 14.5C23 12 21 10.5 18.5 9.5L19.5 5.5L17 5L16 9C15.5 8.8 15 8.7 14.5 8.5L15.5 4.5L13 4L12 8C11.5 7.9 11 7.7 10.5 7.6L7 7L6.5 9.5C6.5 9.5 8.5 10 8.5 10C9.5 10.2 9.5 11 9.5 11.5L8 18C8 18.2 7.8 18.5 7.5 18.5C7.5 18.5 5.5 18 5.5 18L4.5 20.5L8 21.5C8.5 21.6 9 21.8 9.5 22L8.5 26L11 26.5L12 22.5C12.5 22.7 13 22.8 13.5 23L12.5 27L15 27.5L16 23.5C19.5 24.2 22 23.5 23 20.5C23.8 18 23 16.5 21 15.5C22.5 15 23.5 14 22.5 14.5ZM19 19.5C18.5 21.5 14.5 20.5 13 20L14 15.5C15.5 16 19.5 17.5 19 19.5ZM19.5 14.5C19 16.5 15.5 15.5 14 15L15 11C16.5 11.5 20 12.5 19.5 14.5Z" fill="white"/>
  </svg>
);

const ZelleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#6D1ED4"/>
    <path d="M8 10H20L8 22H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);

// ================= CONFIGURATION =================

const CONFIG = {
  // 🔴 REPLACE THESE WITH YOUR ACTUAL VALUES FROM EMAILJS
  EMAILJS_SERVICE_ID: 'service_bxoaipj',      // ← Your Service ID
  EMAILJS_TEMPLATE_ID: 'template_e5q198b',   // ← Your Template ID
  EMAILJS_PUBLIC_KEY: '6A6o4Sk304r05fDcg',              // ← Your Public Key
  WHATSAPP_NUMBER: '+2347072747849',                      // ← Your WhatsApp (country code + number, no +)
};

// ================= MAIN COMPONENT =================

const CartSidebar = ({ cart, isOpen, onClose, onRemove }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const paymentMethods = [
    { id: 'chime', name: 'Chime', icon: <ChimeIcon />, color: '#20C997', description: 'Instant bank transfer' },
    { id: 'paypal', name: 'PayPal', icon: <PayPalIcon />, color: '#003087', description: 'Secure online payment' },
    { id: 'bitcoin', name: 'Bitcoin', icon: <BitcoinIcon />, color: '#F7931A', description: 'Crypto payment' },
    { id: 'zelle', name: 'Zelle', icon: <ZelleIcon />, color: '#6D1ED4', description: 'Fast bank transfer' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!customerInfo.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!customerInfo.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!selectedPayment) newErrors.payment = 'Please select a payment method';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateOrderId = () => {
    // Avoid eslint react-hooks/purity warning about Date.now() during render.
    // Order id generation happens only when placing an order (onClick handler).
    const now = new Date().getTime();
    return 'ORD-' + now.toString(36).toUpperCase();
  };

  const generateItemsHTML = () => {
    return cart.map(item => `
      <tr>
        <td>${item.name}</td>
        <td>${item.size}</td>
        <td style="text-align:right">$${item.price}</td>
      </tr>
    `).join('');
  };

  const generateWhatsAppMessage = (orderId) => {
    const itemsList = cart.map(item => 
      `• ${item.name} (${item.size}) - $${item.price}`
    ).join('\n');

    return encodeURIComponent(
      `🛒 *NEW ORDER - ${orderId}*\n\n` +
      `👤 *Customer Details:*\n` +
      `Name: ${customerInfo.fullName}\n` +
      `Email: ${customerInfo.email}\n` +
      `Phone: ${customerInfo.phone}\n` +
      `Address: ${customerInfo.address || 'N/A'}\n\n` +
      `💳 *Payment Method:* ${selectedPayment.name}\n\n` +
      `📦 *Items Ordered:*\n${itemsList}\n\n` +
      `💰 *Total: $${total.toFixed(2)}*\n\n` +
      `⏰ ${new Date().toLocaleString()}`
    );
  };

const sendConfirmationEmail = async (orderId) => {
  const templateParams = {
    // This is the CRITICAL line — must match your template's "To Email" variable
    customer_email: customerInfo.email,  // ← Customer gets the email
    customer_name: customerInfo.fullName,
    customer_phone: customerInfo.phone,
    order_id: orderId,
    order_date: new Date().toLocaleString(),
    payment_method: selectedPayment.name,
    order_total: `$${total.toFixed(2)}`,
    items_list: generateItemsHTML(),
    whatsapp_number: CONFIG.WHATSAPP_NUMBER,
  };

  try {
    await emailjs.send(
      CONFIG.EMAILJS_SERVICE_ID,
      CONFIG.EMAILJS_TEMPLATE_ID,
      templateParams,
      CONFIG.EMAILJS_PUBLIC_KEY
    );
    console.log('✅ Email sent to:', customerInfo.email);
    return true;
  } catch (error) {
    console.error('❌ Email failed:', error);
    return false;
  }
};

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    const orderId = generateOrderId();

    // Send email in background
    const emailSent = await sendConfirmationEmail(orderId);

    // Show success
    setOrderSuccess(true);

    // Open WhatsApp after brief delay
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${generateWhatsAppMessage(orderId)}`;
      window.open(whatsappUrl, '_blank');

      // Reset everything
      setIsSubmitting(false);
      setOrderSuccess(false);
      setShowPaymentModal(false);
      setSelectedPayment(null);
      setCustomerInfo({ fullName: '', email: '', phone: '', address: '' });
      setErrors({});
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* ================= CART SIDEBAR ================= */}
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
            cart.map((item, index) => (
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
            <button 
              className="checkout-btn"
              onClick={() => setShowPaymentModal(true)}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* ================= PAYMENT MODAL ================= */}
      {showPaymentModal && (
        <div className="paymentoverlay" onClick={() => !isSubmitting && setShowPaymentModal(false)}>
          <div className="paymentcontainer" onClick={(e) => e.stopPropagation()}>
            
            {/* Success Overlay */}
            {orderSuccess && (
              <div className="payment-success-overlay">
                <div className="payment-success-content">
                  <div className="payment-success-icon">
                    <CheckIcon />
                  </div>
                  <h3>Order Successful!</h3>
                  <p>Redirecting to WhatsApp...</p>
                </div>
              </div>
            )}

            {/* Modal Header */}
            <div className="paymentheader">
              <h2 className="paymenttitle">Complete Your Order</h2>
              <button 
                className="paymentclose" 
                onClick={() => setShowPaymentModal(false)}
                disabled={isSubmitting}
              >
                <XIcon />
              </button>
            </div>

            <div className="paymentbody">
              
              {/* Order Summary */}
              <div className="payment-order-summary">
                <h3 className="payment-section-title">Order Summary</h3>
                <div className="payment-items-list">
                  {cart.map((item) => (
                    <div key={item.cartItemId ?? `${item.id}-${item.size}`} className="payment-item">
                      <img src={item.image} alt={item.name} className="payment-item-img" />
                      <div className="payment-item-info">
                        <p className="payment-item-name">{item.name}</p>
                        <p className="payment-item-meta">{item.size}</p>
                      </div>
                      <span className="payment-item-price">${item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="payment-total-row">
                  <span>Total</span>
                  <span className="payment-total-amount">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="payment-form-section">
                <h3 className="payment-section-title">Your Information</h3>
                <div className="payment-form-grid">
                  <div className="payment-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={customerInfo.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="payment-form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="payment-form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                  <div className="payment-form-group full-width">
                    <label>Delivery Address</label>
                    <input
                      type="text"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St, City, State, ZIP"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="payment-methods-section">
                <h3 className="payment-section-title">Select Payment Method</h3>
                <div className="payment-methods-grid">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      className={`payment-method-btn ${selectedPayment?.id === method.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPayment(method)}
                      style={{ '--method-color': method.color }}
                    >
                      <div className="payment-method-icon">{method.icon}</div>
                      <span className="payment-method-name">{method.name}</span>
                      {selectedPayment?.id === method.id && (
                        <div className="payment-method-check">
                          <CheckIcon />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="paymentfooter">
              <button
                className="payment-submit-btn"
                onClick={handlePlaceOrder}
                disabled={isSubmitting || !selectedPayment}
              >
                {isSubmitting ? (
                  <span className="payment-spinner">Processing...</span>
                ) : (
                  <>
                    <span>Place Order via WhatsApp</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
              <p className="payment-security-note">
                🔒 Your information is secure. Order details will be sent via WhatsApp for confirmation.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;