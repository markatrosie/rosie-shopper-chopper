import { Injectable } from '@angular/core';
import { Promo } from './promo';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private pdf: object;
  private currentPage: number;
  private promos: Promo[];

  constructor() { }

  setPdf(pdf: File) {
    this.pdf = pdf;
    this.loadPdf();
  }

  loadPdf() {
    
  }
}
