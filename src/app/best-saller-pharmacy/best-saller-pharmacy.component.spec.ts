import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSallerPharmacyComponent } from './best-saller-pharmacy.component';

describe('BestSallerPharmacyComponent', () => {
  let component: BestSallerPharmacyComponent;
  let fixture: ComponentFixture<BestSallerPharmacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestSallerPharmacyComponent]
    });
    fixture = TestBed.createComponent(BestSallerPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
