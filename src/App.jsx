import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CustomOrderPage from './pages/CustomOrderPage';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import useCheckout from './utils/useCheckout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { handlePayment } = useCheckout();

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      // In a real app, you'd aggregate the cart for a single payment
      // Here we just use the first item as a surrogate for the total
      handlePayment(cartItems[0]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          cartCount={cartItems.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
            <Route path="/custom" element={<CustomOrderPage />} />
          </Routes>
        </main>

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />

        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
        />

        <footer style={{
          background: 'var(--secondary-color)',
          color: '#fff',
          padding: '5rem 0',
          borderTop: '5px solid var(--text-color)'
        }}>
          <div className="retro-container">
            <div className="grid grid-2">
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>KLAIR3D</h2>
                <p style={{ opacity: 0.7, maxWidth: '400px' }}>
                  Kerala's premier 3D printing studio. We blend modern technology with traditional soul.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '4rem', justifyContent: 'flex-end' }}>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>LINKS</h4>
                  <ul style={{ listStyle: 'none', opacity: 0.7 }}>
                    <li>Shop</li>
                    <li>Custom</li>
                    <li>Careers</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>SOCIAL</h4>
                  <ul style={{ listStyle: 'none', opacity: 0.7 }}>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.5 }}>
              © 2026 KLAIR3D - MADE IN INDIA 🇮🇳
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
