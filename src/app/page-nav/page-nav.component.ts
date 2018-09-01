import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { PDFDocumentProxy } from 'pdfjs-dist';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.css']
})
export class PageNavComponent implements OnInit {
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  getPageList(): number[] {
    const pdfDocument: PDFDocumentProxy = this.projectService.getPdfDocument();
    
    if (pdfDocument) {
      const sizedList: null[] = new Array(pdfDocument.numPages);
      const pageList: number[] = Array.from(sizedList.keys());
      return pageList;
    }
  }
}
