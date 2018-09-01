import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-region-layer',
  templateUrl: './region-layer.component.html',
  styleUrls: ['./region-layer.component.css']
})
export class RegionLayerComponent implements OnInit {
  @ViewChild('canvas') canvasEl: ElementRef;

  fabric: fabric.Canvas;

  constructor() {}

  ngOnInit() {
    this.fabric = new fabric.Canvas(this.canvasEl.nativeElement);
  }
}
