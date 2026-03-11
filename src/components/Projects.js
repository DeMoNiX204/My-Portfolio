import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaGithubSquare, FaBook } from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.2 },
    }),
};

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        document.body.style.overflow = selectedProject ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [selectedProject]);

    const projectList = [
        {
            title: "Sign Language Translation App",
            description: "แอปพลิเคชันบนมือถือสำหรับแปลภาษามือ พัฒนาระบบรับภาพผ่านกล้อง (Camera Activity) และประมวลผลวิดีโอเพื่อแปลความหมาย",
            techStack: ["Kotlin", "Android Studio"],
            Icon: <IoPhonePortraitOutline size={100}/>,
            ModalIcon: <IoPhonePortraitOutline size={30}/>,
            githubLink: "https://github.com/DeMoNiX204/Hand_Sign",
            numberColor: "rgba(220, 38, 38, 0.30)",
            details: {
                overview: "โปรเจกต์จบที่มุ่งเน้นการทลายกำแพงการสื่อสาร โดยการสร้างแอปพลิเคชันที่สามารถแปลภาษามือได้ผ่านกล้องมือถือ",
                features: ["ระบบเปิดกล้องเพื่อรับภาพวิดีโอแบบ Real-time", "ประมวลผลและวิเคราะห์ท่าทางภาษามือจากวิดีโอ", "แสดงผลการแปลภาษาบนหน้าจอแอปพลิเคชัน"],
                challenges: "ความท้าทายหลักคือการเขียนโค้ด Kotlin เพื่อจัดการกับ Camera Activity ให้ทำงานได้อย่างสมูท และการ Debugging ระบบวิดีโอให้สามารถดึงเฟรมภาพไปประมวลผลได้อย่างแม่นยำและไม่หน่วงเครื่อง"
            }
        },
        {
            title: "Personal Portfolio Website",
            description: "เว็บไซต์ Portfolio ส่วนตัวเพื่อนำเสนอประวัติการศึกษา ทักษะ และผลงาน พัฒนาด้วย React และออกแบบ UI ให้รองรับการแสดงผลทุกหน้าจอ",
            techStack: ["React", "JavaScript", "HTML/CSS"],
            Icon: <BiWorld size={100}/>,
            ModalIcon: <BiWorld size={30}/>,
            githubLink: "https://github.com/DeMoNiX204/My-Portfolio",
            numberColor: "rgba(248, 113, 113, 0.30)",
            details: {
                overview: "เว็บไซต์สำหรับรวบรวมผลงานและประวัติการศึกษา เพื่อใช้ในการสมัครงานและนำเสนอทักษะทางด้าน Web Development",
                features: ["แสดงผลแบบ Responsive รองรับทั้งคอมพิวเตอร์และมือถือ", "ระบบแสดงไฟล์ PDF (Resume/CV) บนหน้าเว็บ", "ระบบ Popup สำหรับดูรายละเอียดโปรเจกต์"],
                challenges: "การจัดการ State ใน React เพื่อควบคุมการแสดงผลของ UI ต่างๆ เช่น ระบบ Tabs และการสร้าง Modal Popup ให้ทำงานได้อย่างลื่นไหล"
            }
        }
    ];

    return (
        <section id="projects" style={styles.container}>
            <div className="container-fluid">
                <motion.div
                    style={styles.header}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div style={styles.labelBadge}>Portfolio</div>
                    <h2 style={styles.heading}>Featured <span style={styles.headingHighlight}>Projects</span></h2>
                    <p style={styles.subheading}>โปรเจกต์ที่ภูมิใจและแสดงถึงความสามารถของผม</p>
                </motion.div>

                <div className="row justify-content-center">
                    {projectList.map((project, index) => (
                        <div key={index} className="col-lg-5 col-md-12 mb-4">
                            <motion.div
                                style={styles.card}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={index}
                                variants={fadeInUp}
                                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(220,38,38,0.15)' }}
                            >
                                <div style={styles.imageBox}>
                                    <span style={styles.Icon}>{project.Icon}</span>
                                </div>
                                <div style={styles.content}>
                                    <div style={styles.projectHeader}>
                                        <h3 style={styles.projectTitle}>{project.title}</h3>
                                        <div style={{...styles.projectIndex, color: project.numberColor}}>0{index + 1}</div>
                                    </div>
                                    <p style={styles.projectDesc}>{project.description}</p>
                                    <div style={styles.techList}>
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} style={styles.techTag}>{tech}</span>
                                        ))}
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row gap-3">
                                        <a href={project.githubLink} style={styles.linkButton} target="_blank" rel="noreferrer" className="flex-fill">
                                            <FaGithubSquare size={25}/> GitHub
                                        </a>
                                        <button style={styles.detailsButton} onClick={() => setSelectedProject(project)} className="flex-fill">
                                            <FaBook size={25}/> รายละเอียด
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <motion.div
                    style={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        style={styles.modalContent}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button outside header flow */}
                        <button style={styles.closeButton} onClick={() => setSelectedProject(null)}>✕</button>

                        <div style={styles.modalHeader}>
                            <div style={styles.modalIconBox}>{selectedProject.ModalIcon}</div>
                            <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                        </div>

                        <div style={styles.modalSection}>
                            <h4 style={styles.modalSubtitle}>📌 ภาพรวม</h4>
                            <p style={styles.modalText}>{selectedProject.details.overview}</p>
                        </div>
                        <div style={styles.modalSection}>
                            <h4 style={styles.modalSubtitle}>✨ ฟีเจอร์หลัก</h4>
                            <ul style={styles.modalList}>
                                {selectedProject.details.features.map((f, i) => (
                                    <li key={i} style={styles.modalListItem}>{f}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={styles.modalSection}>
                            <h4 style={styles.modalSubtitle}>🔥 ความท้าทาย</h4>
                            <p style={styles.modalText}>{selectedProject.details.challenges}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}

const styles = {
    container: {
        padding: 'clamp(60px, 8vw, 100px) 5%',
        backgroundColor: '#FFFFFF',
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
    subheading: {
        fontSize: 'clamp(15px, 3vw, 18px)',
        color: '#666'
    },
    card: {
        backgroundColor: '#FAFAFA',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        height: '100%'
    },
    imageBox: {
        height: '220px',
        background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Icon: {
        fontSize: '80px'
    },
    content: {
        padding: 'clamp(20px, 4vw, 35px)',
        backgroundColor: '#FFFFFF'
    },
    projectHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '15px'
    },
    projectTitle: {
        fontSize: 'clamp(18px, 3vw, 24px)',
        color: '#1F1F1F',
        fontWeight: '700',
        flex: 1,
        lineHeight: '1.3'
    },
    projectIndex: {
        fontSize: '40px',
        fontWeight: '800',
        lineHeight: '1',
        marginLeft: '15px'
    },
    projectDesc: {
        fontSize: 'clamp(13px, 2.5vw, 15px)',
        color: '#666',
        lineHeight: '1.7',
        marginBottom: '25px'
    },
    techList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '30px'
    },
    techTag: {
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        color: '#DC2626',
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: '600'
    },
    linkButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '14px',
        backgroundColor: '#2d2d2d',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '12px',
        fontSize: '15px',
        fontWeight: '600'
    },
    detailsButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '14px',
        background: '#DC2626',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '12px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    modalOverlay: {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.75)',
        display: 'flex', 
        ustifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: '20px',
        boxSizing: 'border-box'
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 'clamp(25px, 5vw, 50px)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '700px',
        maxHeight: '85vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        boxSizing: 'border-box'
    },
    closeButton: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        border: 'none',
        fontSize: '16px',
        color: '#DC2626',
        cursor: 'pointer',
        fontWeight: 'bold',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    modalHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '30px',
        paddingBottom: '25px',
        paddingRight: '45px',  // ป้องกัน title ชนปุ่มปิด
        borderBottom: '2px solid rgba(220,38,38,0.1)',
        flexWrap: 'wrap',
    },
    modalIconBox: {
        width: '55px',
        height: '55px',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
        flexShrink: 0,
        overflow: 'hidden',
        color: '#FFFFFF'
    },
    modalTitle: {
        fontSize: 'clamp(18px, 4vw, 26px)',
        color: '#1F1F1F',
        fontWeight: '700',
        margin: 0,
        lineHeight: '1.2',
        flex: 1,
        minWidth: 0,
        wordBreak: 'break-word'
    },
    modalSection: {
        marginBottom: '30px'
    },
    modalSubtitle: {
        fontSize: '20px',
        color: '#DC2626',
        fontWeight: '700',
        marginBottom: '15px'
    },
    modalText: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.8'
    },
    modalList: {
        paddingLeft: '25px',
        margin: 0
    },
    modalListItem: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.8',
        marginBottom: '10px'
    },
};

export default Projects;