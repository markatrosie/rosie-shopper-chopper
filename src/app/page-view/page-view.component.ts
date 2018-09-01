import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';
import { PDFDocumentProxy } from 'pdfjs-dist';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {
  constructor(private editorService: EditorService) { }

  ngOnInit() {
  }

  pdfLoaded(pdfDocument: PDFDocumentProxy) {
    this.editorService.setPdfDocument(pdfDocument);
  }
}
