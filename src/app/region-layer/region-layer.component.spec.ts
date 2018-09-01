import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionLayerComponent } from './region-layer.component';

describe('RegionLayerComponent', () => {
  let component: RegionLayerComponent;
  let fixture: ComponentFixture<RegionLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
