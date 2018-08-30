import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-pdf-uploader',
  templateUrl: './pdf-uploader.component.html',
  styleUrls: ['./pdf-uploader.component.css']
})
export class PdfUploaderComponent implements OnInit {

  constructor(private editorService: EditorService) { }

  ngOnInit() {
  }

  fileChanged(e) {
    const pdf: File = e.target.files[0];
    this.editorService.setPdf(pdf);
  }

}
