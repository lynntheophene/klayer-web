import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { Filter } from 'lucide-react';

const ShopPage = ({ onAddToCart }) => {
    const [activeCategory, setActiveCategory] = useState('ALL');

    return (
        <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingTop: '2rem' }}>
            <div className="retro-container">
                <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>THE CATALOG</h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>Browse our complete collection of 3D printed wonders.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['ALL', 'CULTURE', 'DECOR', 'MODULAR', 'CUSTOM'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`retro-button ${activeCategory === cat ? '' : 'secondary'}`}
                                style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                <ProductGrid
                    onAddToCart={onAddToCart}
                    filterCategory={activeCategory === 'ALL' ? null : activeCategory}
                />
            </div>
        </div>
    );
};

export default ShopPage;
