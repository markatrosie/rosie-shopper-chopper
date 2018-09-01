import { Injectable } from '@angular/core';
import { Promo } from './promo';

import { PdfViewerModule, PDFDocumentProxy } from 'ng2-pdf-viewer';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // The File object for the local file the user has selected to work on.
  private pdfFile: File;

  // The typed array containing the data in pdfFile.
  private pdfArray: Uint8Array;

  // The PDF.js document object provided by the pdf-viewer component.
  private pdfDocument: PDFDocumentProxy;
  
  // The current page being worked on (1-based).
  private currentPage: number;

  // The  list of promotions that the user has uploaded.
  private promos: Promo[];

  constructor() { }

  setPdf(pdf: File) {
    this.pdfFile = pdf;
    this.currentPage = 1;
    this.loadPdf();
  }
  
  setPage(page: number) {
    this.currentPage = page; 
  }

  setPdfDocument(pdfDocument: PDFDocumentProxy) {
    this.pdfDocument = pdfDocument;
  }

  getPdfDocument() {
    return this.pdfDocument;
  }

  getPdfData() {
    return this.pdfArray;
  }

  async loadPdf() {
    const buf: ArrayBuffer = await this.readFile(this.pdfFile);
    this.pdfArray = new Uint8Array(buf);
  }

  readFile(file): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e: any) => resolve(e.target.result);
      reader.readAsArrayBuffer(file)
    });
  }
}
