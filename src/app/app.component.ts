import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PharmacyManagementSystem';

  showNavbarAndFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide navbar and footer on login and register pages
        this.showNavbarAndFooter = !this.router.url.includes('/login') && !this.router.url.includes('/register');
      }
    });
  }
}
