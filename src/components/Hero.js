import React from 'react';

function Hero() {
    return (
        <section style={styles.container}>
            <div style={styles.textContent}>
                <div style={styles.badge}>
                    <span style={styles.badgeDot}></span>
                    Available for Work
                </div>
                <h2 style={styles.greeting}>สวัสดีครับ 👋</h2>
                <h1 style={styles.name}>
                    ผม <span style={styles.nameHighlight}>ฉัทชนันท์ พันธเสน</span>
                </h1>
                
                <h3 style={styles.role}>Software & Mobile Developer</h3>
                <div style={styles.roleUnderline}></div>
                
                <p style={styles.description}>
                    นักศึกษาจบกำลังหาที่ฝึกงานที่มีความหลงใหลในการเขียนโค้ดและพัฒนาแอปพลิเคชัน
                    มีประสบการณ์ในการพัฒนา Mobile App และ Web Application ด้วย React
                    พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และเปิดรับโอกาสในการทำงานจริง
                </p>
                
                <div style={styles.buttonGroup}>
                    <button 
                        style={styles.primaryButton}
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        💼 ดูผลงานของฉัน
                    </button>
                    <button 
                        style={styles.secondaryButton}
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        📧 ติดต่อฉัน
                    </button>
                </div>

                <div style={styles.statsContainer}>
                    <div style={styles.statItem}>
                        <div style={styles.statNumber}>2+</div>
                        <div style={styles.statLabel}>โปรเจกต์</div>
                    </div>
                    <div style={styles.statDivider}></div>
                    <div style={styles.statItem}>
                        <div style={styles.statNumber}>5+</div>
                        <div style={styles.statLabel}>เทคโนโลยี</div>
                    </div>
                    <div style={styles.statDivider}></div>
                    <div style={styles.statItem}>
                        <div style={styles.statNumber}>100%</div>
                        <div style={styles.statLabel}>ความตั้งใจ</div>
                    </div>
                </div>
            </div>

            <div style={styles.imageContent}>
                <div style={styles.imageFrame}>
                    <img
                        src="/images/profile.jpg"
                        alt="My Profile"
                        style={styles.profilePic}
                    />
                </div>
            </div>
        </section>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '100px 8%',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        minHeight: '90vh',
        flexWrap: 'wrap',
        position: 'relative',
    },
    textContent: {
        flex: 1,
        minWidth: '320px',
        paddingRight: '40px',
    },
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
    },
    greeting: {
        fontSize: '28px',
        color: '#A0A0A0',
        marginBottom: '15px',
        fontWeight: '400',
    },
    name: {
        fontSize: '48px',
        color: '#FFFFFF',
        marginBottom: '10px',
        fontWeight: '800',
        lineHeight: '1.2',
    },
    nameHighlight: {
        color: '#DC2626',
    },
    role: {
        fontSize: '32px',
        color: '#FFFFFF',
        fontWeight: '600',
        marginBottom: '8px',
        marginTop: '20px',
    },
    roleUnderline: {
        height: '4px',
        background: '#DC2626',
        borderRadius: '2px',
        width: '200px',
        marginBottom: '30px',
    },
    description: {
        fontSize: '17px',
        color: '#B0B0B0',
        lineHeight: '1.8',
        marginBottom: '40px',
        maxWidth: '540px',
    },
    buttonGroup: {
        display: 'flex',
        gap: '18px',
        marginBottom: '50px',
        flexWrap: 'wrap',
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
    },
    statsContainer: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
    },
    statItem: {
        textAlign: 'left',
    },
    statNumber: {
        fontSize: '32px',
        fontWeight: '800',
        color: '#DC2626',
        marginBottom: '5px',
    },
    statLabel: {
        fontSize: '13px',
        color: '#808080',
        textTransform: 'uppercase',
    },
    statDivider: {
        width: '1px',
        height: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    imageContent: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '300px',
        marginTop: '20px',
    },
    imageFrame: {
        position: 'relative',
        width: '350px',
        height: '350px',
    },
    profilePic: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'top',
        border: '6px solid rgba(220, 38, 38, 0.3)',
        boxShadow: '0 20px 60px rgba(220, 38, 38, 0.2)',
    },
};

export default Hero;
