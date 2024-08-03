import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BasketService } from '../basket.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userType: string | null = null;
  categories: any = [];
  products: any = [];
  pharmacies: any = [];
  basketItems: any[] = [];


  constructor(private router: Router,private authService: AuthService , private basketService: BasketService) {}

  ngOnInit(): void {

    this.basketService.basket$.subscribe(items => {
      this.basketItems = items;
    });

    this.userType = sessionStorage.getItem('userType');
    this.authService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });

    this.authService.getPharmacy().subscribe((data: any) => {
      this.pharmacies = data;
    });

    this.authService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
