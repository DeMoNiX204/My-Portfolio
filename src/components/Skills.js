import React from 'react';
import { motion } from 'framer-motion';
import { FaComputer } from "react-icons/fa6";
import { FaBook, FaTools } from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15 },
    }),
};

function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <FaComputer size={30}/>,
            skills: ["C", "Java", "Kotlin", "JavaScript", "HTML/CSS"],
            numberColor: "rgba(220, 38, 38, 0.30)"
        },
        {
            title: "Libraries & Technologies",
            icon: <FaBook size={30}/>,
            skills: ["React", "Mobile App Development", "Image Processing"],
            numberColor: "rgba(220, 38, 38, 0.30)"
        },
        {
            title: "Tools & Environments",
            icon: <FaTools size={30}/>,
            skills: ["Android Studio", "Google Colab", "Git", "GitHub"],
            numberColor: "rgba(220, 38, 38, 0.30)"
        }
    ];

    return (
        <section style={styles.container}>
            <div className="container-fluid">
                <motion.div
                    style={styles.header}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div style={styles.labelBadge}>Expertise</div>
                    <h2 style={styles.heading}>
                        My <span style={styles.headingHighlight}>Skills</span>
                    </h2>
                    <p style={styles.subheading}>เทคโนโลยีและเครื่องมือที่ผมใช้งานได้อย่างคล่องแคล่ว</p>
                </motion.div>

                <div className="row">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                            <motion.div
                                style={styles.card}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={index}
                                variants={fadeInUp}
                                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(220,38,38,0.15)' }}
                            >
                                <div style={styles.cardHeader}>
                                    <div style={styles.iconBox}>{category.icon}</div>
                                    <div style={{...styles.cardNumber, color: category.numberColor}}>0{index + 1}</div>
                                </div>
                                <h3 style={styles.categoryTitle}>{category.title}</h3>
                                <div style={styles.skillTags}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} style={styles.tag}>{skill}</span>
                                    ))}
                                </div>
                                <div style={styles.cardAccent}></div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10 col-12">
                        <motion.div
                            style={styles.additionalSkills}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                        >
                            <h3 style={styles.additionalTitle}>เพิ่มเติม</h3>
                            <div className="row">
                                {['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Attention to Detail'].map((skill, index) => (
                                    <div key={index} className="col-md-6 col-12 mb-3">
                                        <motion.div
                                            style={styles.additionalItem}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                        >
                                            <div style={styles.checkmark}>✓</div>
                                            <span>{skill}</span>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    container: {
                padding: 'clamp(60px, 8vw, 100px) 5%',
                backgroundColor: '#FAFAFA', 
                overflowX: 'hidden'
            },
    header: {
        textAlign: 'center',
        marginBottom: '70px'
    },
    labelBadge: {
        display: 'inline-block',
        padding: '8px 24px',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        color: '#DC2626',
        borderRadius: '30px', 
        ontSize: '13px',
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
    subheading: {
        fontSize: 'clamp(15px, 3vw, 18px)',
        color: '#666'
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 'clamp(25px, 4vw, 40px)',
        borderRadius: '20px',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        height: '100%',
        transition: 'box-shadow 0.3s ease'
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px'
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
    cardNumber: {
        fontSize: '48px',
        fontWeight: '800',
        lineHeight: '1'
    },
    categoryTitle: {
        fontSize: 'clamp(18px, 3vw, 24px)',
        color: '#1F1F1F',
        marginBottom: '25px',
        fontWeight: '700'
    },
    skillTags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
    },
    tag: {
        backgroundColor: 'rgba(220, 38, 38, 0.08)',
        color: '#1F1F1F',
        padding: '8px 14px',
        borderRadius: '10px',
        fontSize: 'clamp(12px, 2vw, 14px)',
        fontWeight: '600'
    },
    cardAccent: {
        position: 'absolute',
        bottom: '0',
        left: '0', 
        ight: '0',
        height: '4px',
        backgroundColor: '#DC2626',
        borderRadius: '0 0 20px 20px'
    },
    additionalSkills: {
        padding: 'clamp(30px, 5vw, 50px)',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
    },
    additionalTitle: {
        fontSize: 'clamp(22px, 4vw, 28px)',
        color: '#1F1F1F',
        marginBottom: '30px',
        fontWeight: '700',
        textAlign: 'center'
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
        color: '#333'
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
        flexShrink: 0 },
};

export default Skills;