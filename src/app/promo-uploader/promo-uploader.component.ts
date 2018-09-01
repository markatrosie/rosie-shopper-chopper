import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { promos } from '../mock-data';

@Component({
  selector: 'app-promo-uploader',
  templateUrl: './promo-uploader.component.html',
  styleUrls: ['./promo-uploader.component.css']
})
export class PromoUploaderComponent implements OnInit {
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    // TODO -- replace mock data with user upload
    this.projectService.setPromos(promos);
  }
}
