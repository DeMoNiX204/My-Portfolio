import React from 'react';
import { motion } from 'framer-motion';
import PDFViewer from './PDFViewer';
import { FaGraduationCap } from "react-icons/fa6";
import { HiMiniClipboard } from "react-icons/hi2";
import { IoMdDocument } from "react-icons/io";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.15 },
    }),
};

function DocumentDownloads() {
    const documents = [
        { title: "Curriculum Vitae", subtitle: "ประวัติส่วนตัว", fileUrl: "/documents/chatchanan_cv.pdf", fileName: "chatchanan_cv.pdf", icon: <IoMdDocument size={35}/>, color: "#DC2626" },
        { title: "Resume", subtitle: "ประวัติการทำงาน", fileUrl: "/documents/chatchanan_resume.pdf", fileName: "chatchanan_resume.pdf", icon: <HiMiniClipboard size={35}/>, color: "#DC2626" },
        { title: "Transcript", subtitle: "ผลการศึกษา", fileUrl: "/documents/chatchanan_transcript.pdf", fileName: "chatchanan_transcript.pdf", icon: <FaGraduationCap size={35}/>, color: "#DC2626" }
    ];

    return (
        <section style={styles.container}>
            <motion.div
                style={styles.header}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div style={styles.labelBadge}>Documents</div>
                <h2 style={styles.heading}>My <span style={styles.headingHighlight}>Documents</span></h2>
                <p style={styles.subheading}>ดาวน์โหลดเอกสารทั้งหมดของผมได้ที่นี่</p>
            </motion.div>

            <div style={styles.documentsContainer}>
                {documents.map((doc, index) => (
                    <motion.div
                        key={index}
                        style={styles.documentSection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={index}
                        variants={fadeInUp}
                    >
                        <div style={styles.sectionHeader}>
                            <div style={{...styles.docIconBox, backgroundColor: doc.color + '15'}}>
                                {doc.icon}
                            </div>
                            <div style={styles.docInfo}>
                                <h3 style={styles.docTitle}>{doc.title}</h3>
                                <p style={styles.docSubtitle}>{doc.subtitle}</p>
                            </div>
                        </div>
                        <div style={styles.pdfContainer}>
                            <PDFViewer fileUrl={doc.fileUrl} fileName={doc.fileName} accentColor={doc.color}/>
                        </div>
                        {index < documents.length - 1 && <div style={styles.divider}/>}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    container: { padding: 'clamp(60px, 8vw, 100px) 5%', backgroundColor: '#FFFFFF', overflowX: 'hidden' },
    header: { textAlign: 'center', marginBottom: '80px' },
    labelBadge: { display: 'inline-block', padding: '8px 24px', backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626', borderRadius: '30px', fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px', border: '1px solid rgba(220, 38, 38, 0.2)' },
    heading: { fontSize: 'clamp(32px, 6vw, 48px)', color: '#1F1F1F', marginBottom: '15px', fontWeight: '800' },
    headingHighlight: { color: '#DC2626' },
    subheading: { fontSize: 'clamp(15px, 3vw, 18px)', color: '#666' },
    documentsContainer: { maxWidth: '900px', margin: '0 auto' },
    documentSection: { marginBottom: '80px' },
    sectionHeader: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', padding: 'clamp(20px, 3vw, 30px)', backgroundColor: '#FAFAFA', borderRadius: '20px', border: '2px solid rgba(220, 38, 38, 0.1)', flexWrap: 'wrap' },
    docIconBox: { width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
    docInfo: { flex: 1, minWidth: '150px' },
    docTitle: { fontSize: 'clamp(20px, 4vw, 28px)', color: '#1F1F1F', margin: '0 0 8px 0', fontWeight: '700' },
    docSubtitle: { fontSize: '16px', color: '#666', margin: 0 },
    pdfContainer: { width: '100%', display: 'flex', justifyContent: 'center', overflowX: 'auto' },
    divider: { height: '2px', backgroundColor: 'rgba(220, 38, 38, 0.1)', marginTop: '80px' },
};

export default DocumentDownloads;