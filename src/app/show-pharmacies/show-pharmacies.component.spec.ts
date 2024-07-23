import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPharmaciesComponent } from './show-pharmacies.component';

describe('ShowPharmaciesComponent', () => {
  let component: ShowPharmaciesComponent;
  let fixture: ComponentFixture<ShowPharmaciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPharmaciesComponent]
    });
    fixture = TestBed.createComponent(ShowPharmaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
