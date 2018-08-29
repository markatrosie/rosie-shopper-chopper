import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoUploaderComponent } from './promo-uploader.component';

describe('PromoUploaderComponent', () => {
  let component: PromoUploaderComponent;
  let fixture: ComponentFixture<PromoUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
