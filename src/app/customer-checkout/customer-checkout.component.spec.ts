import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCheckoutComponent } from './customer-checkout.component';

describe('CustomerCheckoutComponent', () => {
  let component: CustomerCheckoutComponent;
  let fixture: ComponentFixture<CustomerCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCheckoutComponent]
    });
    fixture = TestBed.createComponent(CustomerCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
