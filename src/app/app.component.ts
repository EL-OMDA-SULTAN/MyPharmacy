import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNavbarAndFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide navbar and footer on login, register, and forgot-password pages
        this.showNavbarAndFooter = !this.router.url.includes('/login') &&
                                   !this.router.url.includes('/register') &&
                                   !this.router.url.includes('/forgot-password')&&
                                   !this.router.url.includes('/super-admin-dashboard');
      }
    });
  }
}
