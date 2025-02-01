import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const PdfDownload = (content) => {
  const contentRef = content
    const element = contentRef.current;
    const options = {
      margin: 1,
      filename: "resume.pdf",
      html2canvas: { scale: 5 },
      allowTaint: true,
      dpi: 300,
      letterRendering: true,
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait", precision: 100, },
    };
    html2pdf().set(options).from(element).save();
};

export default PdfDownload;
