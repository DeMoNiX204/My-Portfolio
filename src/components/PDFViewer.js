import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { HiDocumentDownload } from "react-icons/hi";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PDFViewer({ fileUrl, fileName, accentColor = '#DC2626' }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [containerWidth, setContainerWidth] = useState(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const updateWidth = () => {
            if (wrapperRef.current) {
                const w = wrapperRef.current.getBoundingClientRect().width;
                if (w > 0) setContainerWidth(Math.floor(w));
            }
        };

        // Small delay to ensure layout is complete
        const timer = setTimeout(updateWidth, 50);

        const observer = new ResizeObserver(() => {
            updateWidth();
        });
        observer.observe(wrapperRef.current);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const goToPrevPage = () => setPageNumber(prev => prev - 1);
    const goToNextPage = () => setPageNumber(prev => prev + 1);

    return (
        <div style={styles.outerWrapper} ref={wrapperRef}>
            <div style={styles.pdfWrapper}>
                {containerWidth && (
                    <Document
                        file={fileUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div style={styles.loadingContainer}>
                                <p>กำลังโหลดเอกสาร...</p>
                            </div>
                        }
                        error={
                            <div style={styles.errorContainer}>
                                <p>ไม่สามารถโหลดเอกสารได้</p>
                            </div>
                        }
                    >
                        <Page
                            pageNumber={pageNumber}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            width={containerWidth}
                        />
                    </Document>
                )}
            </div>

            {numPages > 1 && (
                <div style={styles.pagination}>
                    <button
                        style={{...styles.pageButton, borderColor: accentColor, color: accentColor}}
                        onClick={goToPrevPage}
                        disabled={pageNumber <= 1}
                    >
                        ← ก่อนหน้า
                    </button>

                    <div style={styles.pageInfo}>
                        <span style={{...styles.currentPage, color: accentColor}}>{pageNumber}</span>
                        <span style={styles.pageSeparator}>/</span>
                        <span style={styles.totalPages}>{numPages}</span>
                    </div>

                    <button
                        style={{...styles.pageButton, borderColor: accentColor, color: accentColor}}
                        onClick={goToNextPage}
                        disabled={pageNumber >= numPages}
                    >
                        ถัดไป →
                    </button>
                </div>
            )}

            <div style={styles.downloadSection}>
                <a
                    href={fileUrl}
                    download={fileName}
                    style={{...styles.downloadButton, backgroundColor: accentColor}}
                >
                    Download <HiDocumentDownload size={25}/>
                </a>
            </div>
        </div>
    );
}

const styles = {
    outerWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        minWidth: 0,
    },
    pdfWrapper: {
        border: '2px solid rgba(220, 38, 38, 0.15)',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        marginBottom: '25px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        width: '100%',
        boxSizing: 'border-box',
    },
    loadingContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px',
        minHeight: '200px',
        fontSize: '15px',
        color: '#666',
    },
    errorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px',
        minHeight: '200px',
        fontSize: '15px',
        color: '#DC2626',
    },
    pagination: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '25px',
        padding: '15px 25px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '2px solid rgba(220, 38, 38, 0.1)',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
    },
    pageButton: {
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: '2px solid',
        borderRadius: '10px',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
    },
    pageInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0 15px',
    },
    currentPage: {
        fontSize: '24px',
        fontWeight: '800',
    },
    pageSeparator: {
        fontSize: '18px',
        color: '#CCC',
    },
    totalPages: {
        fontSize: '18px',
        color: '#999',
        fontWeight: '500',
    },
    downloadSection: {
        width: '100%',
        maxWidth: '350px',
    },
    downloadButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        width: '100%',
        padding: '16px 30px',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '12px',
        fontWeight: '600',
        fontSize: '15px',
        transition: 'all 0.3s ease',
        boxSizing: 'border-box',
    },
};

export default PDFViewer;