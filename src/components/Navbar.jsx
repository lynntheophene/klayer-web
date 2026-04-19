import React from 'react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount, onOpenCart, onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav style={{
      background: 'var(--bg-color)',
      borderBottom: 'var(--border-width) solid var(--text-color)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="retro-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div
          onClick={() => navigate('/')}
          style={{
            fontSize: '2rem',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            color: 'var(--primary-color)',
            textShadow: '2px 2px 0px var(--text-color)',
            cursor: 'pointer'
          }}
        >
          KLAIR3D
        </div>

        {/* Desktop Nav */}
        <div style={{
          display: 'none',
          gap: '1.5rem',
          alignItems: 'center'
        }} className="desktop-nav">
          <Link to="/shop" style={{ textDecoration: 'none', color: 'var(--text-color)', fontWeight: 600 }}>Shop</Link>
          <Link to="/custom" style={{ textDecoration: 'none', color: 'var(--text-color)', fontWeight: 600 }}>Custom</Link>

          <button
            className="retro-button secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            onClick={onOpenAuth}
          >
            <User size={18} />
            <span>JOIN THE LAB</span>
          </button>

          <button
            className="retro-button"
            style={{ padding: '0.5rem 1rem' }}
            onClick={onOpenCart}
          >
            <ShoppingCart size={20} />
            <span style={{
              background: '#fff',
              color: 'var(--text-color)',
              padding: '0 6px',
              borderRadius: '10px',
              fontSize: '0.8rem',
              marginLeft: '4px',
              fontWeight: 900,
              border: '1px solid var(--text-color)'
            }}>{cartCount}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'block' }} className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
