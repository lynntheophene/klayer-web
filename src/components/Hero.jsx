import React from 'react';

const Hero = () => {
    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="retro-container">
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <div>
                        <div style={{
                            background: 'var(--accent-color)',
                            display: 'inline-block',
                            padding: '0.2rem 1rem',
                            border: '2px solid var(--text-color)',
                            borderRadius: '20px',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.9rem',
                            marginBottom: '1rem',
                            transform: 'rotate(-2deg)'
                        }}>
                            BASED IN INDIA
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 10vw, 5rem)',
                            lineHeight: 0.9,
                            marginBottom: '1.5rem',
                            color: 'var(--text-color)'
                        }}>
                            WE PRINT <br />
                            <span style={{ color: 'var(--primary-color)' }}>THE FUTURE</span>
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            marginBottom: '2rem',
                            maxWidth: '500px'
                        }}>
                            Short-run manufacturing and custom 3D printed collectibles. Made in India, delivered to your doorstep.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="retro-button">SHOP COLLECTION</button>
                            <button className="retro-button secondary">REPLY NOW</button>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div className="animate-float" style={{
                            background: 'var(--primary-color)',
                            width: '100%',
                            aspectRatio: '1/1',
                            borderRadius: '50%',
                            border: 'var(--border-width) solid var(--text-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            boxShadow: '10px 10px 0px var(--text-color)'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
                                alt="3D Printing"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply', opacity: 0.8 }}
                            />
                        </div>
                        {/* Sticker Decor */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '-5%',
                            background: '#fff',
                            border: '3px solid var(--text-color)',
                            padding: '1rem',
                            borderRadius: '12px',
                            transform: 'rotate(10deg)',
                            boxShadow: '4px 4px 0px var(--text-color)',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.2rem'
                        }}>
                            100% RECYCLED ♻️
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
