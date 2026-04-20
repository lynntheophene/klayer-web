import React, { useState, useRef } from 'react';
import { Upload, MessageSquare, Box, Send, CheckCircle2, X, FileIcon, Loader2 } from 'lucide-react';

const CustomOrderPage = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        description: ''
    });
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [status, setStatus] = useState('idle'); // idle, submitting, success
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (!selectedFile.name.toLowerCase().endsWith('.stl')) {
                alert('Only STL files are accepted for production.');
                if (fileInputRef.current) fileInputRef.current.value = '';
                return;
            }
            setFile(selectedFile);
            setFilePreview(null); // No preview for STL yet
        }
    };

    const removeFile = (e) => {
        e.stopPropagation();
        setFile(null);
        setFilePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.projectName || !file) {
            alert('Please provide a project name and upload a file.');
            return;
        }
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 2000);
    };

    if (status === 'success') {
        return (
            <div style={{ background: 'var(--bg-color)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div className="retro-card" style={{ background: '#fff', padding: '4rem', textAlign: 'center', maxWidth: '500px', width: '100%' }}>
                    <div style={{ display: 'inline-flex', padding: '1.5rem', background: '#e6fffa', borderRadius: '50%', marginBottom: '2rem', color: '#38a169' }}>
                        <CheckCircle2 size={64} />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>PROJECT SUBMITTED!</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem', lineHeight: 1.6 }}>
                        Awesome! We've received your ideas for <b>"{formData.projectName}"</b>. Our engineers are already looking at it.
                    </p>
                    <div style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '12px', border: 'var(--border-width) solid var(--text-color)', marginBottom: '2.5rem' }}>
                        <p style={{ fontWeight: 800, color: 'var(--primary-color)', fontSize: '1.1rem' }}>
                            🚀 Expect a quote and technical feedback within <span style={{ textDecoration: 'underline' }}>4 hours</span>.
                        </p>
                    </div>
                    <button
                        className="retro-button"
                        onClick={() => {
                            setStatus('idle');
                            setFormData({ projectName: '', description: '' });
                            setFile(null);
                            setFilePreview(null);
                        }}
                        style={{ width: '100%', justifyContent: 'center' }}
                    >
                        START ANOTHER PROJECT
                    </button>
                </div>
            </div>
        );
    }

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
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 800 }}>PROJECT NAME</label>
                                <input
                                    type="text"
                                    name="projectName"
                                    value={formData.projectName}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Vintage Radio Case"
                                    required
                                    style={{ padding: '1rem', border: 'var(--border-width) solid var(--text-color)', borderRadius: '8px', fontFamily: 'var(--font-body)' }}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 800 }}>DESCRIPTION</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Tell us what you need..."
                                    style={{ padding: '1rem', border: 'var(--border-width) solid var(--text-color)', borderRadius: '8px', fontFamily: 'var(--font-body)', minHeight: '120px' }}
                                />
                            </div>

                            <div
                                onClick={() => fileInputRef.current?.click()}
                                style={{
                                    border: '3px dashed var(--text-color)',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    borderRadius: '12px',
                                    background: file ? 'var(--bg-color)' : '#f8f8f8',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                    accept=".stl"
                                />

                                {file ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                        {filePreview ? (
                                            <div style={{ position: 'relative' }}>
                                                <img src={filePreview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px', borderRadius: '8px', objectFit: 'cover', border: '2px solid var(--text-color)' }} />
                                                <button onClick={removeFile} style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--primary-color)', color: '#fff', border: 'none', borderRadius: '50%', padding: '4px', cursor: 'pointer' }}>
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ) : (
                                            <div style={{ position: 'relative', padding: '1rem', background: '#fff', borderRadius: '8px', border: '2px solid var(--text-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <FileIcon size={32} />
                                                <div style={{ textAlign: 'left' }}>
                                                    <p style={{ fontWeight: 800, fontSize: '0.9rem', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</p>
                                                    <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                                </div>
                                                <button onClick={removeFile} style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--primary-color)', color: '#fff', border: 'none', borderRadius: '50%', padding: '4px', cursor: 'pointer' }}>
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        )}
                                        <p style={{ fontSize: '0.8rem', fontWeight: 600 }}>Click to change file</p>
                                    </div>
                                ) : (
                                    <>
                                        <Upload size={32} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                        <p style={{ fontWeight: 800 }}>UPLOAD STL FILES ONLY</p>
                                        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Maximum size: 50MB</p>
                                    </>
                                )}
                            </div>

                            <button
                                className="retro-button"
                                disabled={status === 'submitting'}
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    padding: '1.2rem',
                                    marginTop: '1rem',
                                    opacity: status === 'submitting' ? 0.7 : 1,
                                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        SUBMITTING...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        SUBMIT PROJECT
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomOrderPage;
