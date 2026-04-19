import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: "Kathakali Mask Mini",
        price: 499,
        category: "CULTURE",
        rating: 4.9,
        description: "Detailed 3D printed wall hangable mask of Kerala's famous dance drama.",
        image: "/images/kathakali_mask.png"
    },
    {
        id: 2,
        name: "Malabar Houseboat",
        price: 899,
        category: "DECOR",
        rating: 4.8,
        description: "Scale model of the iconic Alleppey houseboat, printed in wood-fill resin.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 3,
        name: "Modern Elephant",
        price: 1299,
        category: "ART",
        rating: 5.0,
        description: "Low-poly geometric elephant sculpture for modern Kerala homes.",
        image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 4,
        name: "SpaceBot Modular Kit",
        price: 1599,
        category: "MODULAR",
        rating: 5.0,
        description: "Fully detachable and poseable 3D printed robot. Perfect for makers and enthusiasts.",
        image: "/images/spacebot.png"
    }
];

const ProductGrid = ({ onAddToCart, filterCategory }) => {
    const filteredProducts = filterCategory
        ? products.filter(p => p.category === filterCategory)
        : products;

    return (
        <section className="section-padding" style={{ background: '#fff' }}>
            <div className="retro-container">
                {(!filterCategory) && (
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>SAY NO TO <span style={{ color: 'var(--primary-color)' }}>BORING</span> DECOR</h2>
                        <p>Hand-crafted 3D prints from the heart of Kerala.</p>
                    </div>
                )}

                <div className="grid grid-4">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <p style={{ opacity: 0.5 }}>No products found in this category yet. Stay tuned!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
