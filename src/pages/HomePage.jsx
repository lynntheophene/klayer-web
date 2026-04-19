import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const HomePage = ({ onAddToCart }) => {
    return (
        <>
            <Hero onExplore={() => document.getElementById('shop-section').scrollIntoView({ behavior: 'smooth' })} />
            <div id="shop-section">
                <div style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--bg-color)' }}>
                    <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)' }}>FEATURED DROPS</h2>
                    <p style={{ opacity: 0.7 }}>Limited edition builds made in India.</p>
                </div>
                <ProductGrid onAddToCart={onAddToCart} />
            </div>
        </>
    );
};

export default HomePage;
