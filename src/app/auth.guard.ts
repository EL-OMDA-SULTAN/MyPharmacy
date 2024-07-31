import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      // User is authenticated, redirect them to the home page or dashboard
      this.router.navigate(['/']); // or wherever you want to redirect
      return false;
    }
    return true; // Allow access if the user is not authenticated
  }
}
