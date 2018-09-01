import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { fabric } from 'fabric';

import { Promo } from '../promo';

@Component({
  selector: 'app-region-layer',
  templateUrl: './region-layer.component.html',
  styleUrls: ['./region-layer.component.css']
})
export class RegionLayerComponent implements OnInit, OnChanges {
  @Input() allPromos: Promo[];
  @Input() activePromo: Promo;

  @ViewChild('canvas') canvasEl: ElementRef;

  fabric: fabric.Canvas;

  constructor() {}

  ngOnChanges() {
    console.log('My promos', this.allPromos);
    console.log('My promo', this.activePromo);
  }

  ngOnInit() {

    this.fabric = new fabric.Canvas(this.canvasEl.nativeElement);
  }
}
