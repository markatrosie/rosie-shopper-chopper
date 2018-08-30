import { Component, OnInit } from '@angular/core';
import { Promo } from '../promo';
import { promos } from '../mock-data';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit {
  promos: Promo[] = promos
  size: number = 8

  constructor() { 
    console.log(this.promos);
  }

  ngOnInit() {
  }

}
