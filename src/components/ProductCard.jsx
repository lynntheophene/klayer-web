import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import useCheckout from '../utils/useCheckout';

const ProductCard = ({ product, onAddToCart }) => {
    const { handlePayment } = useCheckout();

    return (
        <div className="retro-card" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div style={{
                background: '#f0f0f0',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '2px solid var(--text-color)',
                marginBottom: '1rem',
                aspectRatio: '1/1'
            }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{
                        background: 'var(--accent-color)',
                        fontSize: '0.7rem',
                        padding: '2px 8px',
                        borderRadius: '20px',
                        border: '1px solid var(--text-color)',
                        fontWeight: 800
                    }}>
                        {product.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.8rem' }}>
                        <Star size={12} fill="var(--text-color)" />
                        <span>{product.rating}</span>
                    </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>{product.description}</p>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                paddingTop: '1rem',
                borderTop: '2px dashed #ddd'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>₹{product.price}</div>
                    <button
                        className="retro-button secondary"
                        style={{ padding: '0.5rem', borderRadius: '8px' }}
                        onClick={() => onAddToCart(product)}
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
                <button
                    className="retro-button"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', justifyContent: 'center', fontSize: '0.9rem' }}
                    onClick={() => handlePayment(product)}
                >
                    BUY NOW
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
