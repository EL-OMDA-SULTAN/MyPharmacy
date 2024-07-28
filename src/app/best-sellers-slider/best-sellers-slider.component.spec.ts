import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersSliderComponent } from './best-sellers-slider.component';

describe('BestSellersSliderComponent', () => {
  let component: BestSellersSliderComponent;
  let fixture: ComponentFixture<BestSellersSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestSellersSliderComponent]
    });
    fixture = TestBed.createComponent(BestSellersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
