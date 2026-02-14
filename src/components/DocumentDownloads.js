import React from 'react';
import PDFViewer from './PDFViewer';

function DocumentDownloads() {
    const documents = [
        {
            title: "Curriculum Vitae",
            subtitle: "ประวัติส่วนตัว",
            fileUrl: "/documents/chatchanan_cv.pdf",
            fileName: "chatchanan_cv.pdf",
            icon: "📄",
            color: "#DC2626"
        },
        {
            title: "Resume",
            subtitle: "ประวัติการทำงาน",
            fileUrl: "/documents/chatchanan_resume.pdf",
            fileName: "chatchanan_resume.pdf",
            icon: "📋",
            color: "#DC2626"
        },
        {
            title: "Transcript",
            subtitle: "ผลการศึกษา",
            fileUrl: "/documents/chatchanan_transcript.pdf",
            fileName: "chatchanan_transcript.pdf",
            icon: "🎓",
            color: "#DC2626"
        }
    ];

    return (
        <section style={styles.container}>
            <div style={styles.header}>
                <div style={styles.labelBadge}>Documents</div>
                <h2 style={styles.heading}>
                    My <span style={styles.headingHighlight}>Documents</span>
                </h2>
                <p style={styles.subheading}>
                    ดาวน์โหลดเอกสารทั้งหมดของผมได้ที่นี่
                </p>
            </div>

            <div style={styles.documentsContainer}>
                {documents.map((doc, index) => (
                    <div key={index} style={styles.documentSection}>
                        <div style={styles.sectionHeader}>
                            <div style={{...styles.docIconBox, backgroundColor: doc.color + '15'}}>
                                <span style={styles.docIcon}>{doc.icon}</span>
                            </div>
                            <div style={styles.docInfo}>
                                <h3 style={styles.docTitle}>{doc.title}</h3>
                                <p style={styles.docSubtitle}>{doc.subtitle}</p>
                            </div>
                        </div>

                        <div style={styles.pdfContainer}>
                            <PDFViewer
                                fileUrl={doc.fileUrl}
                                fileName={doc.fileName}
                                accentColor={doc.color}
                            />
                        </div>

                        {index < documents.length - 1 && <div style={styles.divider}></div>}
                    </div>
                ))}
            </div>
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
        marginBottom: '80px',
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
    documentsContainer: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    documentSection: {
        marginBottom: '80px',
    },
    sectionHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
        marginBottom: '40px',
        padding: '30px',
        backgroundColor: '#FAFAFA',
        borderRadius: '20px',
        border: '2px solid rgba(220, 38, 38, 0.1)',
    },
    docIconBox: {
        width: '70px',
        height: '70px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    docIcon: {
        fontSize: '32px',
    },
    docInfo: {
        flex: 1,
    },
    docTitle: {
        fontSize: '28px',
        color: '#1F1F1F',
        margin: '0 0 8px 0',
        fontWeight: '700',
    },
    docSubtitle: {
        fontSize: '16px',
        color: '#666',
        margin: 0,
    },
    pdfContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    divider: {
        height: '2px',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        marginTop: '80px',
    },
};

export default DocumentDownloads;
