import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PharmacyAdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (user && user.User_Type === 'pharmacy_admin') {
      return true; // Allow access
    } else {
      this.router.navigate(['/']);
      return false; // Redirect to home if not a pharmacy admin
    }
  }
}
