import React, { useState } from 'react';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectList = [
        {
            title: "Sign Language Translation App",
            description: "แอปพลิเคชันบนมือถือสำหรับแปลภาษามือ พัฒนาระบบรับภาพผ่านกล้อง (Camera Activity) และประมวลผลวิดีโอเพื่อแปลความหมาย",
            techStack: ["Kotlin", "Android Studio"],
            imageEmoji: "📱",
            githubLink: "#",
            numberColor: "rgba(220, 38, 38, 0.30)", // สีแดงเข้ม
            details: {
                overview: "โปรเจกต์จบที่มุ่งเน้นการทลายกำแพงการสื่อสาร โดยการสร้างแอปพลิเคชันที่สามารถแปลภาษามือได้ผ่านกล้องมือถือ",
                features: [
                    "ระบบเปิดกล้องเพื่อรับภาพวิดีโอแบบ Real-time",
                    "ประมวลผลและวิเคราะห์ท่าทางภาษามือจากวิดีโอ",
                    "แสดงผลการแปลภาษาบนหน้าจอแอปพลิเคชัน"
                ],
                challenges: "ความท้าทายหลักคือการเขียนโค้ด Kotlin เพื่อจัดการกับ Camera Activity ให้ทำงานได้อย่างสมูท และการ Debugging ระบบวิดีโอให้สามารถดึงเฟรมภาพไปประมวลผลได้อย่างแม่นยำและไม่หน่วงเครื่อง"
            }
        },
        {
            title: "Personal Portfolio Website",
            description: "เว็บไซต์ Portfolio ส่วนตัวเพื่อนำเสนอประวัติการศึกษา ทักษะ และผลงาน พัฒนาด้วย React และออกแบบ UI ให้รองรับการแสดงผลทุกหน้าจอ",
            techStack: ["React", "JavaScript", "HTML/CSS"],
            imageEmoji: "🌐",
            githubLink: "#",
            numberColor: "rgba(248, 113, 113, 0.30)", // สีแดงอ่อน
            details: {
                overview: "เว็บไซต์สำหรับรวบรวมผลงานและประวัติการศึกษา เพื่อใช้ในการสมัครงานและนำเสนอทักษะทางด้าน Web Development",
                features: [
                    "แสดงผลแบบ Responsive รองรับทั้งคอมพิวเตอร์และมือถือ",
                    "ระบบแสดงไฟล์ PDF (Resume/CV) บนหน้าเว็บ",
                    "ระบบ Popup สำหรับดูรายละเอียดโปรเจกต์"
                ],
                challenges: "การจัดการ State ใน React เพื่อควบคุมการแสดงผลของ UI ต่างๆ เช่น ระบบ Tabs และการสร้าง Modal Popup ให้ทำงานได้อย่างลื่นไหล"
            }
        }
    ];

    return (
        <section id="projects" style={styles.container}>
            <div style={styles.header}>
                <div style={styles.labelBadge}>Portfolio</div>
                <h2 style={styles.heading}>
                    Featured <span style={styles.headingHighlight}>Projects</span>
                </h2>
                <p style={styles.subheading}>โปรเจกต์ที่ภูมิใจและแสดงถึงความสามารถของผม</p>
            </div>
            
            <div style={styles.grid}>
                {projectList.map((project, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.imageBox}>
                            <span style={styles.imageEmoji}>{project.imageEmoji}</span>
                        </div>
                        
                        <div style={styles.content}>
                            <div style={{...styles.projectHeader}}>
                                <h3 style={styles.projectTitle}>{project.title}</h3>
                                <div style={{...styles.projectIndex, color: project.numberColor}}>0{index + 1}</div>
                            </div>
                            
                            <p style={styles.projectDesc}>{project.description}</p>
                            
                            <div style={styles.techList}>
                                {project.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} style={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div style={styles.links}>
                                <a 
                                    href={project.githubLink} 
                                    style={styles.linkButton} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    💻 GitHub
                                </a>
                                <button 
                                    style={styles.detailsButton} 
                                    onClick={() => setSelectedProject(project)}
                                >
                                    📖 รายละเอียด
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button style={styles.closeButton} onClick={() => setSelectedProject(null)}>
                            ✕
                        </button>
                        
                        <div style={styles.modalHeader}>
                            <div style={styles.modalIconBox}>
                                <span style={styles.modalIcon}>{selectedProject.imageEmoji}</span>
                            </div>
                            <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                        </div>
                        
                        <div style={styles.modalSection}>
                            <h4 style={styles.modalSubtitle}>📌 ภาพรวม</h4>
                            <p style={styles.modalText}>{selectedProject.details.overview}</p>
                        </div>

                        <div style={styles.modalSection}>
                            <h4 style={styles.modalSubtitle}>✨ ฟีเจอร์หลัก</h4>
                            <ul style={styles.modalList}>
                                {selectedProject.details.features.map((feature, i) => (
                                    <li key={i} style={styles.modalListItem}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={styles.modalSection}>
                            <h4 style={styles.modalSubtitle}>🔥 ความท้าทาย</h4>
                            <p style={styles.modalText}>{selectedProject.details.challenges}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

const styles = {
    container: {
        padding: '100px 8%',
        backgroundColor: '#FFFFFF',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '40px',
    },
    card: {
        backgroundColor: '#FAFAFA',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        transition: 'all 0.3s ease',
    },
    imageBox: {
        height: '250px',
        background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageEmoji: {
        fontSize: '80px',
    },
    content: {
        padding: '35px',
        backgroundColor: '#FFFFFF',
    },
    projectHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '15px',
    },
    projectTitle: {
        fontSize: '24px',
        color: '#1F1F1F',
        fontWeight: '700',
        flex: 1,
        lineHeight: '1.3',
    },
    projectIndex: {
        fontSize: '40px',
        fontWeight: '800',
        lineHeight: '1',
        marginLeft: '15px',
    },
    projectDesc: {
        fontSize: '15px',
        color: '#666',
        lineHeight: '1.7',
        marginBottom: '25px',
    },
    techList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '30px',
    },
    techTag: {
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        color: '#DC2626',
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: '600',
    },
    links: {
        display: 'flex',
        gap: '12px',
    },
    linkButton: {
        flex: 1,
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
        fontWeight: '600',
        transition: 'all 0.3s ease',
    },
    detailsButton: {
        flex: 1,
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
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: '50px',
        borderRadius: '24px',
        width: '90%',
        maxWidth: '700px',
        maxHeight: '85vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
    },
    closeButton: {
        position: 'absolute',
        top: '25px',
        right: '25px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        border: 'none',
        fontSize: '20px',
        color: '#DC2626',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    modalHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '40px',
        paddingBottom: '25px',
        borderBottom: '2px solid rgba(220, 38, 38, 0.1)',
    },
    modalIconBox: {
        width: '70px',
        height: '70px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
        flexShrink: 0,
    },
    modalIcon: {
        fontSize: '36px',
    },
    modalTitle: {
        fontSize: '28px',
        color: '#1F1F1F',
        fontWeight: '700',
        margin: 0,
        lineHeight: '1.2',
    },
    modalSection: {
        marginBottom: '30px',
    },
    modalSubtitle: {
        fontSize: '20px',
        color: '#DC2626',
        fontWeight: '700',
        marginBottom: '15px',
    },
    modalText: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.8',
    },
    modalList: {
        paddingLeft: '25px',
        margin: 0,
    },
    modalListItem: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.8',
        marginBottom: '10px',
    },
};

export default Projects;