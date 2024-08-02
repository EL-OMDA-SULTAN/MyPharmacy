import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDetailsComponent } from './pharmacy-details.component';

describe('PharmacyDetailsComponent', () => {
  let component: PharmacyDetailsComponent;
  let fixture: ComponentFixture<PharmacyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyDetailsComponent]
    });
    fixture = TestBed.createComponent(PharmacyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
