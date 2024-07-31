import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PharmacyAdminGuard } from './pharmacy-admin.guard';

describe('PharmacyAdminGuard', () => {
  let guard: PharmacyAdminGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PharmacyAdminGuard,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    guard = TestBed.inject(PharmacyAdminGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is pharmacy admin', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify({ User_Type: 'pharmacy_admin' }));
    expect(guard.canActivate()).toBeTrue();
  });

  it('should deny access and redirect if user is not pharmacy admin', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify({ User_Type: 'user' }));
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
