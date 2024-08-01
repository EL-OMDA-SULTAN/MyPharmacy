import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    guard = TestBed.inject(AdminGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is SuperAdmin', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify({ User_Type: 'SuperAdmin' }));
    expect(guard.canActivate()).toBeTrue();
  });

  it('should deny access and redirect if user is not SuperAdmin', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify({ User_Type: 'user' }));
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
