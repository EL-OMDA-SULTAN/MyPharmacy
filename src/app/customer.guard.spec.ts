import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CustomerGuard } from './customer.guard';

describe('CustomerGuard', () => {
  let guard: CustomerGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerGuard,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    guard = TestBed.inject(CustomerGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is customer', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify({ User_Type: 'customer' }));
    expect(guard.canActivate()).toBeTrue();
  });

  it('should deny access and redirect if user is not customer', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify({ User_Type: 'user' }));
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
