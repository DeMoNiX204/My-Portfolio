import React from 'react';
import { TbMailFilled } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

function Contact() {
    const contactInfo = [
        {
            platform: "Email",
            value: "chatchanan918@gmail.com",
            link: "mailto:chatchanan918@gmail.com",
            icon: <TbMailFilled size={30}/>
        },
        {
            platform: "GitHub",
            value: "github.com/DeMoNiX204",
            link: "https://github.com/DeMoNiX204",
            icon: <FaGithubSquare size={30}/>
        },
        {
            platform: "Phone",
            value: "092-416-5647",
            link: "tel:092-416-5647",
            icon: <IoPhonePortraitOutline size={30}/>
        }
    ];

    return (
        <section id="contact" style={styles.container}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <div style={styles.labelBadge}>Get In Touch</div>
                    <h2 style={styles.heading}>
                        Let's <span style={styles.headingHighlight}>Connect</span>
                    </h2>
                    <p style={styles.subHeading}>
                        สนใจร่วมงานหรือมีข้อสงสัย สามารถติดต่อผมได้ตามช่องทางด้านล่างนี้
                    </p>
                </div>
                
                <div style={styles.contactList}>
                    {contactInfo.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.contactCard}
                        >
                            <div style={styles.iconBox}>
                                {contact.icon}
                            </div>
                            <div style={styles.info}>
                                <h4 style={styles.platform}>{contact.platform}</h4>
                                <p style={styles.value}>{contact.value}</p>
                            </div>
                            <div style={styles.arrow}>→</div>
                        </a>
                    ))}
                </div>

                <div style={styles.ctaBox}>
                    <h3 style={styles.ctaTitle}>พร้อมเริ่มโปรเจกต์ใหม่?</h3>
                    <p style={styles.ctaText}>
                        ผมพร้อมที่จะช่วยพัฒนาไอเดียของคุณให้เป็นจริง<br/>
                        มาร่วมงานกันและสร้างสิ่งที่ยอดเยี่ยม
                    </p>
                    <button 
                        style={styles.ctaButton}
                        onClick={() => window.location.href = 'mailto:chatchanan918@gmail.com'}
                    >
                        <TbMailFilled size={25}/> ส่งอีเมลหาผม
                    </button>
                </div>
            </div>
            
            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <div style={styles.footerLeft}>
                        <div style={styles.footerLogo}>Chatchanan</div>
                        <p style={styles.footerTagline}>Software & Mobile Developer</p>
                    </div>
                    <div style={styles.footerRight}>
                        <p style={styles.footerText}>
                            &copy; {new Date().getFullYear()} Chatchanan Pantasan. Built with React & ❤️
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

const styles = {
    container: {
        padding: '100px 8% 0 8%',
        backgroundColor: '#FAFAFA',
    },
    content: {
        position: 'relative',
    },
    header: {
        textAlign: 'center',
        marginBottom: '60px',
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
        border: '1px solid rgba(220, 38, 38, 0.2)',
    },
    heading: {
        fontSize: '48px',
        color: '#1F1F1F',
        marginBottom: '15px',
        fontWeight: '800',
    },
    headingHighlight: {
        color: '#DC2626',
    },
    subHeading: {
        fontSize: '18px',
        color: '#666',
    },
    contactList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '700px',
        margin: '0 auto 80px auto',
    },
    contactCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
        padding: '30px',
        backgroundColor: '#FFFFFF',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        borderRadius: '16px',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
    },
    iconBox: {
        width: '70px',
        height: '70px',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        flexShrink: 0,
    },
    info: {
        flex: 1,
        textAlign: 'left',
    },
    platform: {
        fontSize: '20px',
        color: '#1F1F1F',
        margin: '0 0 8px 0',
        fontWeight: '700',
    },
    value: {
        fontSize: '15px',
        color: '#DC2626',
        margin: '0',
        fontWeight: '500',
    },
    arrow: {
        fontSize: '24px',
        color: '#DC2626',
        fontWeight: 'bold',
    },
    ctaBox: {
        maxWidth: '700px',
        margin: '0 auto 80px auto',
        padding: '60px',
        background: 'linear-gradient(135deg, #1F1F1F 0%, #2d2d2d 100%)',
        borderRadius: '24px',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    },
    ctaTitle: {
        fontSize: '32px',
        color: '#FFFFFF',
        marginBottom: '15px',
        fontWeight: '700',
    },
    ctaText: {
        fontSize: '17px',
        color: '#B0B0B0',
        lineHeight: '1.7',
        marginBottom: '35px',
    },
    ctaButton: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '18px 40px',
        background: '#DC2626',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '12px',
        fontSize: '17px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    footer: {
        borderTop: '2px solid rgba(220, 38, 38, 0.1)',
        paddingTop: '50px',
        paddingBottom: '50px',
        marginTop: '80px',
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    footerLeft: {
        flex: 1,
    },
    footerLogo: {
        fontSize: '28px',
        fontWeight: '800',
        color: '#DC2626',
        marginBottom: '8px',
    },
    footerTagline: {
        fontSize: '14px',
        color: '#666',
        margin: 0,
    },
    footerRight: {
        flex: 1,
        textAlign: 'right',
    },
    footerText: {
        color: '#888',
        fontSize: '14px',
        margin: 0,
    },
};

export default Contact;
