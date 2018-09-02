import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { fabric } from 'fabric';

import { Promo, Region } from '../promo';

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
    if (this.fabric) {
      this.fabric.clear();
      this.drawPromos();
    }
  }

  drawPromos() {
    this.allPromos.forEach(
      (promo: Promo) =>
        promo !== this.activePromo
        && promo.region
        && this.drawInactivePromo(promo)
    );

    if (this.activePromo) {
      this.drawActivePromo(this.activePromo);
    }

    this.fabric.requestRenderAll();
  }

  drawInactivePromo(promo: Promo) {
    if (promo.region) {
      const rect = this.getRegionRect(promo.region);
      rect.fill = 'rgba(0, 0, 0, 0.1)';
      this.fabric.add(rect);
    }
  }

  drawActivePromo(promo: Promo) {
    if (promo.region) {
      const rect = this.getRegionRect(promo.region);
      rect.fill = 'rgba(0, 0, 0, 0.25)';
      this.fabric.add(rect);
      this.fabric.setActiveObject(rect);
    }
  }

  getRegionRect(region: Region) {
    return new fabric.Rect({
      left: region[0],
      top: region[1],
      width: region[2],
      height: region[3]
    })
  }

  ngOnInit() {
    this.fabric = new fabric.Canvas(this.canvasEl.nativeElement);
    this.drawPromos();
  }
}
