import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TbMailFilled } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.15 },
    }),
};

function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null);

    const contactInfo = [
        { platform: "Email", value: "chatchanan918@gmail.com", link: "mailto:chatchanan918@gmail.com", icon: <TbMailFilled size={30}/> },
        { platform: "GitHub", value: "github.com/DeMoNiX204", link: "https://github.com/DeMoNiX204", icon: <FaGithubSquare size={30}/> },
        { platform: "Phone", value: "092-416-5647", link: "tel:092-416-5647", icon: <IoPhonePortraitOutline size={30}/> }
    ];

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        emailjs.sendForm(
            'service_qgiql3r',
            'template_e63x6jb',
            formRef.current,
            'nlYbvUOP7_Wj7jbtG'
        ).then(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(null), 4000);
        }).catch(() => {
            setStatus('error');
            setTimeout(() => setStatus(null), 4000);
        });
    };

    return (
        <section id="contact" style={styles.container}>
            <div style={styles.content}>
                <motion.div
                    style={styles.header}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div style={styles.labelBadge}>Get In Touch</div>
                    <h2 style={styles.heading}>Let's <span style={styles.headingHighlight}>Connect</span></h2>
                    <p style={styles.subHeading}>สนใจร่วมงานหรือมีข้อสงสัย สามารถติดต่อผมได้ตามช่องทางด้านล่างนี้</p>
                </motion.div>

                <div style={styles.contactList}>
                    {contactInfo.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.contactCard}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            variants={fadeInUp}
                            whileHover={{ x: 6 }}
                        >
                            <div style={styles.iconBox}>{contact.icon}</div>
                            <div style={styles.info}>
                                <h4 style={styles.platform}>{contact.platform}</h4>
                                <p style={styles.value}>{contact.value}</p>
                            </div>
                            <div style={styles.arrow}>→</div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    style={styles.ctaBox}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <h3 style={styles.ctaTitle}>Contact Me!</h3>
                    <p style={styles.ctaText}></p>
                    <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.formRow}>
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={styles.input}/>
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input}/>
                        </div>
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required style={{...styles.input, width: '100%'}}/>
                        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required rows={5} style={styles.textarea}/>
                        {status === 'success' && <div style={styles.successMsg}>✅ ส่งข้อความสำเร็จ! จะติดต่อกลับโดยเร็ว</div>}
                        {status === 'error' && <div style={styles.errorMsg}>❌ เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</div>}
                        <button type="submit" style={styles.submitButton} disabled={status === 'sending'}>
                            <TbMailFilled size={20}/>
                            {status === 'sending' ? 'กำลังส่ง...' : 'ส่งข้อความ'}
                        </button>
                    </form>
                </motion.div>
            </div>

            <footer style={styles.footer}>
                <motion.div
                    style={styles.footerContent}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={styles.footerLeft}>
                        <div style={styles.footerLogo}>Chatchanan</div>
                        <p style={styles.footerTagline}>Software & Mobile Developer</p>
                    </div>
                    <div style={styles.footerRight}>
                        <p style={styles.footerText}>&copy; {new Date().getFullYear()} Chatchanan Pantasan. Built with React & ❤️</p>
                    </div>
                </motion.div>
            </footer>
        </section>
    );
}

const styles = {
    container: {
        padding: 'clamp(60px, 8vw, 100px) 5% 0 5%',
        backgroundColor: '#FAFAFA',
        overflowX: 'hidden'
    },
    content: {
        position: 'relative'
    },
    header: {
        textAlign: 'center',
        marginBottom: '60px'
            },
    labelBadge: {
        display: 'inline-block',
        padding: '8px 24px',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        color: '#DC2626',
        borderRadius: '30px',
        fontSize: '13px',
        fontWeight: '700',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        marginBottom: '20px',
        border: '1px solid rgba(220, 38, 38, 0.2)'
    },
    heading: {
        fontSize: 'clamp(32px, 6vw, 48px)',
        color: '#1F1F1F',
        marginBottom: '15px',
        fontWeight: '800'
    },
    headingHighlight: {
        color: '#DC2626'
    },
    subHeading: {
        fontSize: 'clamp(15px, 3vw, 18px)',
        color: '#666'
    },
    contactList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px', maxWidth: '700px',
        margin: '0 auto 80px auto'
    },
    contactCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px', padding: '20px',
        backgroundColor: '#FFFFFF',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        borderRadius: '16px',
        textDecoration: 'none',
        color: 'inherit',
        boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
        minWidth: 0
    },
    iconBox: {
        width: '60px',
        height: '60px',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        flexShrink: 0
    },
    info: {
        flex: 1,
        textAlign: 'left',
        minWidth: 0,
        overflow: 'hidden'
    },
    platform: {
        fontSize: 'clamp(16px, 4vw, 20px)',
        color: '#1F1F1F',
        margin: '0 0 6px 0',
        fontWeight: '700'
    },
    value: {
        fontSize: 'clamp(12px, 3vw, 15px)',
        color: '#DC2626',
        margin: '0',
        fontWeight: '500',
        wordBreak: 'break-all'
    },
    arrow: {
        fontSize: '24px',
        color: '#DC2626',
        fontWeight: 'bold',
        flexShrink: 0
    },
    ctaBox: {
        maxWidth: '700px',
        margin: '0 auto 80px auto',
        padding: 'clamp(30px, 5vw, 60px)',
        background: 'linear-gradient(135deg, #1F1F1F 0%, #2d2d2d 100%)',
        borderRadius: '24px',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
    },
    ctaTitle: {
        fontSize: 'clamp(22px, 5vw, 32px)',
        color: '#FFFFFF',
        marginBottom: '15px',
        fontWeight: '700'
    },
    ctaText: {
        fontSize: 'clamp(14px, 3vw, 17px)',
        color: '#B0B0B0',
        lineHeight: '1.7',
        marginBottom: '35px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        textAlign: 'left'
    },
    formRow: {
        display: 'flex',
        gap: '14px',
        flexWrap: 'wrap'
    },
    input: {
        flex: 1,
        minWidth: '140px',
        padding: '14px 18px',
        borderRadius: '10px',
        border: '2px solid rgba(255,255,255,0.1)',
        backgroundColor: 'rgba(255,255,255,0.08)',
        color: '#FFFFFF',
        fontSize: '15px',
        outline: 'none',
        boxSizing: 'border-box',
        fontFamily: 'inherit'
    },
    textarea: {
        width: '100%',
        padding: '14px 18px',
        borderRadius: '10px',
        border: '2px solid rgba(255,255,255,0.1)',
        backgroundColor: 'rgba(255,255,255,0.08)',
        color: '#FFFFFF', fontSize: '15px',
        outline: 'none',
        resize: 'vertical',
        boxSizing: 'border-box',
        fontFamily: 'inherit'
    },
    submitButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '16px',
        background: '#DC2626',
        color: '#FFFFFF', 
        border: 'none',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        width: '100%'
    },
    successMsg: {
        padding: '12px 16px',
        backgroundColor: 'rgba(34,197,94,0.15)',
        border: '1px solid rgba(34,197,94,0.4)',
        borderRadius: '10px', color: '#4ade80',
        fontSize: '14px',
        textAlign: 'center'
    },
    errorMsg: {
        padding: '12px 16px',
        backgroundColor: 'rgba(220,38,38,0.15)',
        border: '1px solid rgba(220,38,38,0.4)',
        borderRadius: '10px', color: '#f87171',
        fontSize: '14px',
        textAlign: 'center'
    },
    footer: {
        borderTop: '2px solid rgba(220,38,38,0.1)',
        paddingTop: '50px',
        paddingBottom: '50px',
        marginTop: '80px'
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    footerLeft: {
        flex: 1,
        minWidth:
        '150px'
    },
    footerLogo: {
        fontSize: 'clamp(20px, 4vw, 28px)',
        fontWeight: '800',
        color: '#DC2626',
        marginBottom: '8px'
    },
    footerTagline: {
        fontSize: '14px',
        color: '#666',
        margin: 0
    },
    footerRight: {
        flex: 1,
        textAlign: 'right',
        minWidth: '150px'
    },
    footerText: {
        color: '#888',
        fontSize: '14px',
        margin: 0
    },
};

export default Contact;