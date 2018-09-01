import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';
import { PDFDocumentProxy } from 'pdfjs-dist';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.css']
})
export class PageNavComponent implements OnInit {
  constructor(private editorService: EditorService) { }

  ngOnInit() {
  }

  getPageList(): number[] {
    const pdfDocument: PDFDocumentProxy = this.editorService.getPdfDocument();
    
    if (pdfDocument) {
      const sizedList: null[] = new Array(pdfDocument.numPages);
      const pageList: number[] = Array.from(sizedList.keys());
      return pageList;
    }
  }
}
