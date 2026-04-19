import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove, onCheckout }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                style={{
                    fixed: 'inset-0',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 999,
                    display: isOpen ? 'block' : 'none',
                    backdropFilter: 'blur(4px)'
                }}
            />

            {/* Drawer */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: isOpen ? 0 : '-100%',
                width: 'min(400px, 90%)',
                height: '100%',
                background: 'var(--bg-color)',
                zIndex: 1000,
                transition: 'right 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
                borderLeft: 'var(--border-width) solid var(--text-color)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    padding: '2rem',
                    borderBottom: 'var(--border-width) solid var(--text-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ fontSize: '1.5rem' }}>YOUR HAUL</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X /></button>
                </div>

                <div style={{ flexGrow: 1, overflowY: 'auto', padding: '2rem' }}>
                    {cartItems.length === 0 ? (
                        <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.5 }}>
                            <ShoppingBag size={64} style={{ marginBottom: '1rem' }} />
                            <p>Your cart is empty.</p>
                            <button className="retro-button" style={{ marginTop: '1rem' }} onClick={onClose}>GO SHOPPING</button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {cartItems.map((item, index) => (
                                <div key={index} className="retro-card" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', border: '2px solid var(--text-color)' }} />
                                    <div style={{ flexGrow: 1 }}>
                                        <h4 style={{ fontSize: '1rem' }}>{item.name}</h4>
                                        <div style={{ fontWeight: 900 }}>₹{item.price}</div>
                                    </div>
                                    <button
                                        onClick={() => onRemove(index)}
                                        style={{ background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer' }}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{
                    padding: '2rem',
                    borderTop: 'var(--border-width) solid var(--text-color)',
                    background: '#fff'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 900, marginBottom: '2rem' }}>
                        <span>TOTAL:</span>
                        <span>₹{total}</span>
                    </div>
                    <button
                        className="retro-button"
                        style={{ width: '100%', justifyContent: 'center', fontSize: '1.4rem' }}
                        disabled={cartItems.length === 0}
                        onClick={onCheckout}
                    >
                        CHECKOUT NOW
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
