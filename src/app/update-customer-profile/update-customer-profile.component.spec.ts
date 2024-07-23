import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerProfileComponent } from './update-customer-profile.component';

describe('UpdateCustomerProfileComponent', () => {
  let component: UpdateCustomerProfileComponent;
  let fixture: ComponentFixture<UpdateCustomerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCustomerProfileComponent]
    });
    fixture = TestBed.createComponent(UpdateCustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
