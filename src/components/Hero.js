import React from 'react';
import { motion } from 'framer-motion';
import { IoIosBriefcase } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";

function Hero() {
    return (
        <section style={styles.container}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div style={styles.textContent}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                style={styles.badge}
                            >
                                <span style={styles.badgeDot}></span>
                                Available for Work
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                style={styles.greeting}
                            >
                                สวัสดีครับ 👋
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                style={styles.name}
                            >
                                ผม <span style={styles.nameHighlight}>ฉัทชนันท์ พันธเสน</span>
                            </motion.h1>

                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                style={styles.role}
                            >
                                Software & Mobile Developer
                            </motion.h3>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 'clamp(120px, 40vw, 200px)' }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                style={styles.roleUnderline}
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                style={styles.description}
                            >
                                นักศึกษาจบกำลังหาที่ฝึกงานที่มีความหลงใหลในการเขียนโค้ดและพัฒนาแอปพลิเคชัน
                                มีประสบการณ์ในการพัฒนา Mobile App และ Web Application ด้วย React
                                พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และเปิดรับโอกาสในการทำงานจริง
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="d-flex flex-wrap gap-3 mb-4"
                            >
                                <button
                                    style={styles.primaryButton}
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <IoIosBriefcase size={20}/> ดูผลงานของฉัน
                                </button>
                                <button
                                    style={styles.secondaryButton}
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <TbMailFilled size={20}/> ติดต่อฉัน
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="d-flex flex-wrap align-items-center gap-4"
                            >
                                {[
                                    { number: '2+', label: 'โปรเจกต์' },
                                    { number: '5+', label: 'เทคโนโลยี' },
                                    { number: '100%', label: 'ความตั้งใจ' },
                                ].map((stat, i) => (
                                    <React.Fragment key={i}>
                                        {i > 0 && <div style={styles.statDivider} className="d-none d-sm-block"/>}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                                            style={styles.statItem}
                                        >
                                            <div style={styles.statNumber}>{stat.number}</div>
                                            <div style={styles.statLabel}>{stat.label}</div>
                                        </motion.div>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                style={styles.imageFrame}
                            >
                                <img
                                    src="/images/profile.jpg"
                                    alt="My Profile"
                                    style={styles.profilePic}
                                    className="img-fluid"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    container: {
        padding: 'clamp(60px, 8vw, 100px) 5%',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden',
    },
    textContent: { paddingRight: '10px', maxWidth: '100%' },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 20px',
        backgroundColor: 'rgba(220, 38, 38, 0.15)',
        border: '1px solid rgba(220, 38, 38, 0.3)',
        borderRadius: '30px',
        color: '#EF4444',
        fontSize: '13px',
        fontWeight: '600',
        marginBottom: '25px',
    },
    badgeDot: {
        width: '8px',
        height: '8px',
        backgroundColor: '#EF4444',
        borderRadius: '50%',
        flexShrink: 0
    },
    greeting: {
        fontSize: 'clamp(20px, 5vw, 28px)',
        color: '#A0A0A0',
        marginBottom: '15px',
        fontWeight: '400'
    },
    name: {
        fontSize: 'clamp(28px, 6vw, 48px)',
        color: '#FFFFFF', marginBottom: '10px',
        fontWeight: '800',
        lineHeight: '1.2',
        wordBreak: 'break-word'
    },
    nameHighlight: {
        color: '#DC2626'
    },
    role: {
        fontSize: 'clamp(20px, 4vw, 32px)',
        color: '#FFFFFF', fontWeight: '600',
        marginBottom: '8px',
        marginTop: '20px'
    },
    roleUnderline: {
        height: '4px',
        background: '#DC2626',
        borderRadius: '2px',
        marginBottom: '30px'
    },
    description: {
        fontSize: 'clamp(14px, 3vw, 17px)',
        color: '#B0B0B0',
        lineHeight: '1.8',
        marginBottom: '40px',
        maxWidth: '540px',
        wordBreak: 'break-word'
    },
    primaryButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '16px 32px',
        background: '#DC2626',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap'
    },
    secondaryButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '16px 32px',
        backgroundColor: 'transparent',
        color: '#DC2626',
        border: '2px solid #DC2626',
        borderRadius: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap'
    },
    statItem: {
        textAlign: 'left'
    },
    statNumber: {
        fontSize: 'clamp(24px, 5vw, 32px)',
        fontWeight: '800',
        color: '#DC2626',
        marginBottom: '5px'
    },
    statLabel: {
        fontSize: '13px',
        color: '#808080',
        textTransform: 'uppercase'
    },
    statDivider: {
        width: '1px',
        height: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    imageFrame: {
        position: 'relative',
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        aspectRatio: '1/1',
        margin: '30px auto 0 auto'
    },
    profilePic: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'top',
        border: '6px solid rgba(220, 38, 38, 0.3)',
        boxShadow: '0 20px 60px rgba(220, 38, 38, 0.2)'
    },
};

export default Hero;