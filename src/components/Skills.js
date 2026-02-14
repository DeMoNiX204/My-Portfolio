import React from 'react';

function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "💻",
            skills: ["C","Java","Kotlin", "JavaScript", "HTML/CSS"],
            numberColor: "rgba(220, 38, 38, 0.30)" // 30% opacity - เห็นชัดที่สุด
        },
        {
            title: "Libraries & Technologies",
            icon: "⚡",
            skills: ["React", "Mobile App Development", "Image Processing"],
            numberColor: "rgba(220, 38, 38, 0.30)" // 30% opacity - เห็นชัดที่สุด
        },
        {
            title: "Tools & Environments",
            icon: "🛠️",
            skills: ["Android Studio", "Google Colab", "Git", "GitHub"],
            numberColor: "rgba(220, 38, 38, 0.30)" // 30% opacity - เห็นชัดที่สุด
        }
    ];

    return (
        <section style={styles.container}>
            <div style={styles.header}>
                <div style={styles.labelBadge}>Expertise</div>
                <h2 style={styles.heading}>
                    My <span style={styles.headingHighlight}>Skills</span>
                </h2>
                <p style={styles.subheading}>
                    เทคโนโลยีและเครื่องมือที่ผมใช้งานได้อย่างคล่องแคล่ว
                </p>
            </div>
            
            <div style={styles.grid}>
                {skillCategories.map((category, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.cardHeader}>
                            <div style={styles.iconBox}>
                                <span style={styles.icon}>{category.icon}</span>
                            </div>
                            <div style={{...styles.cardNumber, color: category.numberColor}}>0{index + 1}</div>
                        </div>
                        
                        <h3 style={styles.categoryTitle}>{category.title}</h3>
                        
                        <div style={styles.skillTags}>
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} style={styles.tag}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                        
                        <div style={styles.cardAccent}></div>
                    </div>
                ))}
            </div>

            <div style={styles.additionalSkills}>
                <h3 style={styles.additionalTitle}>เพิ่มเติม</h3>
                <div style={styles.additionalGrid}>
                    {['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Attention to Detail'].map((skill, index) => (
                        <div key={index} style={styles.additionalItem}>
                            <div style={styles.checkmark}>✓</div>
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles = {
    container: {
        padding: '100px 8%',
        backgroundColor: '#FAFAFA',
    },
    header: {
        textAlign: 'center',
        marginBottom: '70px',
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
    subheading: {
        fontSize: '18px',
        color: '#666',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '80px',
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: '40px',
        borderRadius: '20px',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px',
    },
    iconBox: {
        width: '60px',
        height: '60px',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
    },
    icon: {
        fontSize: '28px',
    },
    cardNumber: {
        fontSize: '48px',
        fontWeight: '800',
        lineHeight: '1',
    },
    categoryTitle: {
        fontSize: '24px',
        color: '#1F1F1F',
        marginBottom: '25px',
        fontWeight: '700',
    },
    skillTags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
    },
    tag: {
        backgroundColor: 'rgba(220, 38, 38, 0.08)',
        color: '#1F1F1F',
        padding: '10px 18px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
    },
    cardAccent: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '4px',
        backgroundColor: '#DC2626',
        borderRadius: '0 0 20px 20px',
    },
    additionalSkills: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '50px',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    },
    additionalTitle: {
        fontSize: '28px',
        color: '#1F1F1F',
        marginBottom: '30px',
        fontWeight: '700',
        textAlign: 'center',
    },
    additionalGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    additionalItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '15px 20px',
        backgroundColor: '#FAFAFA',
        borderRadius: '12px',
        fontSize: '15px',
        fontWeight: '500',
        color: '#333',
    },
    checkmark: {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: '#DC2626',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        flexShrink: 0,
    },
};

export default Skills;