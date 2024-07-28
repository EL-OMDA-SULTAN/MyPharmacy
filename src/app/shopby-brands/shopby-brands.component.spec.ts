import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbyBrandsComponent } from './shopby-brands.component';

describe('ShopbyBrandsComponent', () => {
  let component: ShopbyBrandsComponent;
  let fixture: ComponentFixture<ShopbyBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopbyBrandsComponent]
    });
    fixture = TestBed.createComponent(ShopbyBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
