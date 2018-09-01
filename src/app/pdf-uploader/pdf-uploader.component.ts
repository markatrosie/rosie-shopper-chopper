import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-pdf-uploader',
  templateUrl: './pdf-uploader.component.html',
  styleUrls: ['./pdf-uploader.component.css']
})
export class PdfUploaderComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  fileChanged(e) {
    const pdf: File = e.target.files[0];
    this.projectService.setPdf(pdf);
  }

}
