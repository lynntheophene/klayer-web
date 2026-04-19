import React from 'react';
import { X, LogIn } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)'
        }}>
            <div className="retro-card" style={{
                width: 'min(450px, 95%)',
                background: 'var(--bg-color)',
                padding: '3rem',
                position: 'relative'
            }}>
                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    <X />
                </button>

                <div className="text-center">
                    <div style={{
                        background: 'var(--primary-color)',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        border: '3px solid var(--text-color)',
                        color: '#fff'
                    }}>
                        <LogIn size={32} />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>JOIN THE LAB</h2>
                    <p style={{ marginBottom: '2.5rem', opacity: 0.7 }}>Access exclusive modular builds and track your hauls.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button className="retro-button secondary" style={{ width: '100%', justifyContent: 'center' }}>
                        <img src="https://www.google.com/favicon.ico" alt="google" style={{ width: '18px', marginRight: '0.5rem' }} />
                        CONTINUE WITH GOOGLE
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
                        <div style={{ flexGrow: 1, height: '2px', background: 'var(--text-color)', opacity: 0.1 }}></div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>OR</span>
                        <div style={{ flexGrow: 1, height: '2px', background: 'var(--text-color)', opacity: 0.1 }}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 800 }}>MOBILE NUMBER (OTP)</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="text"
                                placeholder="+91 00000 00000"
                                style={{
                                    flexGrow: 1,
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: 'var(--border-width) solid var(--text-color)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '1rem'
                                }}
                            />
                            <button className="retro-button" style={{ padding: '0.8rem' }}>GO</button>
                        </div>
                    </div>
                </div>

                <p style={{ marginTop: '2.5rem', fontSize: '0.7rem', textAlign: 'center', opacity: 0.5 }}>
                    By joining, you agree to our <span style={{ textDecoration: 'underline' }}>Terms of Service</span> and <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>.
                </p>
            </div>
        </div>
    );
};

export default AuthModal;
