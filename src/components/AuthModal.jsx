import React, { useState } from 'react';
import { X, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthModal = ({ isOpen, onClose }) => {
    const { signInWithGoogle } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError('');
        try {
            await signInWithGoogle();
            onClose();
        } catch (err) {
            setError('Google sign-in failed. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(12px)'
        }}>
            <div className="retro-card" style={{
                width: 'min(400px, 95%)',
                background: 'var(--bg-color)',
                padding: '3rem',
                position: 'relative',
                animation: 'float 6s ease-in-out infinite'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-color)'
                    }}
                >
                    <X size={24} />
                </button>

                <div className="text-center">
                    <div style={{
                        background: 'var(--primary-color)',
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        border: '3px solid var(--text-color)',
                        color: '#fff',
                        boxShadow: '4px 4px 0px var(--text-color)',
                        transform: 'rotate(-5deg)'
                    }}>
                        <LogIn size={32} />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1 }}>JOIN THE LAB</h2>
                    <p style={{ marginBottom: '2.5rem', opacity: 0.8, fontSize: '0.9rem' }}>Access exclusive modular builds and track your hauls.</p>
                </div>

                {error && (
                    <div style={{
                        background: '#FFE5E5',
                        border: '2px solid var(--primary-color)',
                        padding: '0.8rem',
                        borderRadius: '8px',
                        marginBottom: '1.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--primary-color)',
                        fontWeight: 600
                    }}>
                        {error}
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="retro-button secondary"
                        style={{ width: '100%', justifyContent: 'center' }}
                    >
                        <img src="https://www.google.com/favicon.ico" alt="google" style={{ width: '18px', marginRight: '0.5rem' }} />
                        {loading ? 'PLEASE WAIT...' : 'CONTINUE WITH GOOGLE'}
                    </button>

                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', textAlign: 'center', opacity: 0.6 }}>
                        More signup options coming soon!
                    </p>
                </div>

                <p style={{ marginTop: '2.5rem', fontSize: '0.7rem', textAlign: 'center', opacity: 0.5 }}>
                    By joining, you agree to our <span style={{ textDecoration: 'underline' }}>Terms of Service</span> and <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>.
                </p>
            </div>
        </div>
    );
};

export default AuthModal;
