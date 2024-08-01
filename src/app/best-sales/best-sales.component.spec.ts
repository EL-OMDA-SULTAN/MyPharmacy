import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSalesComponent } from './best-sales.component';

describe('BestSalesComponent', () => {
  let component: BestSalesComponent;
  let fixture: ComponentFixture<BestSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestSalesComponent]
    });
    fixture = TestBed.createComponent(BestSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
