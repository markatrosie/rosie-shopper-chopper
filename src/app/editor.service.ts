import { Injectable } from '@angular/core';
import { Promo } from './promo';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private pdf: object;
  private pdfArray: Uint8Array;
  private currentPage: number;
  private promos: Promo[];

  constructor() { }

  setPdf(pdf: File) {
    this.pdf = pdf;
    this.currentPage = 1;
    this.loadPdf();
  }

  async loadPdf() {
    const buf: ArrayBuffer = await this.readFile(this.pdf);
    this.pdfArray = new Uint8Array(buf);
  }

  getPdfData() {
    return this.pdfArray;
  }

  readFile(file): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e: any) => resolve(e.target.result);
      reader.readAsArrayBuffer(file)
    });
  }
}
