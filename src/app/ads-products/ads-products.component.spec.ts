import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsProductsComponent } from './ads-products.component';

describe('AdsProductsComponent', () => {
  let component: AdsProductsComponent;
  let fixture: ComponentFixture<AdsProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsProductsComponent]
    });
    fixture = TestBed.createComponent(AdsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
