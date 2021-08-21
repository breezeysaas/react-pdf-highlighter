interface Window {
  pdfjsWorker?: any;
  PdfViewer?: any;
}

declare module "pdfjs-dist/lib/pdf";
declare module "pdfjs-dist/lib/pdf.worker";
declare module "pdfjs-dist/web/pdf_viewer";
