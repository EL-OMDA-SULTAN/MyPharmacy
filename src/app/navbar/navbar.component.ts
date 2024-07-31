import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userType: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userType = sessionStorage.getItem('userType');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
