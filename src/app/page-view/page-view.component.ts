import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { PDFDocumentProxy } from 'pdfjs-dist';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  pdfLoaded(pdfDocument: PDFDocumentProxy) {
    this.projectService.setPdfDocument(pdfDocument);
  }
}
