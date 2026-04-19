import React from 'react';
import { Upload, MessageSquare, Box, Send } from 'lucide-react';

const CustomOrderPage = () => {
    return (
        <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingTop: '4rem', paddingBottom: '6rem' }}>
            <div className="retro-container">
                <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div className="retro-sticker" style={{ background: 'var(--accent-color)', marginBottom: '1rem' }}>THE LAB</div>
                        <h1 style={{ fontSize: '5rem', fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: '2rem' }}>
                            BRING YOUR <span style={{ color: 'var(--primary-color)' }}>IDEAS</span> TO LIFE
                        </h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '3rem' }}>
                            Whether it's a replacement part, a custom gift, or an industrial prototype, our India-based lab is ready for the challenge.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div className="retro-card" style={{ padding: '1rem', background: '#fff' }}><Box size={32} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem' }}>CONSULTATION</h3>
                                    <p style={{ opacity: 0.6 }}>Technical advice on materials and design.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div className="retro-card" style={{ padding: '1rem', background: '#fff' }}><MessageSquare size={32} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem' }}>QUICK QUOTE</h3>
                                    <p style={{ opacity: 0.6 }}>Get pricing within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="retro-card" style={{ background: '#fff', padding: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>START A PROJECT</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 800 }}>PROJECT NAME</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Vintage Radio Case"
                                    style={{ padding: '1rem', border: 'var(--border-width) solid var(--text-color)', borderRadius: '8px', fontFamily: 'var(--font-body)' }}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 800 }}>DESCRIPTION</label>
                                <textarea
                                    placeholder="Tell us what you need..."
                                    style={{ padding: '1rem', border: 'var(--border-width) solid var(--text-color)', borderRadius: '8px', fontFamily: 'var(--font-body)', minHeight: '120px' }}
                                />
                            </div>

                            <div style={{
                                border: '3px dashed var(--text-color)',
                                padding: '2rem',
                                textAlign: 'center',
                                borderRadius: '12px',
                                background: '#f8f8f8',
                                cursor: 'pointer'
                            }}>
                                <Upload size={32} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontWeight: 800 }}>UPLOAD STL / 3D FILES</p>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Maximum size: 50MB</p>
                            </div>

                            <button className="retro-button" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', marginTop: '1rem' }}>
                                <Send size={20} />
                                SUBMIT PROJECT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomOrderPage;
