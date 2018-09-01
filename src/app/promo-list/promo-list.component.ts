import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../project.service';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit {
  size: number = 8

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
  }
}
