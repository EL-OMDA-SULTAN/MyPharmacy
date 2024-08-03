import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-customer-wishlist',
  templateUrl: './customer-wishlist.component.html',
  styleUrls: ['./customer-wishlist.component.css']
})
export class CustomerWishlistComponent {
  wishlistItems: any = [];
  products: any = [];
  customerID: number = 0;
  noItems: boolean = false;

  constructor( private router: Router,private authService: AuthService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    const storedCustomerID = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.customerID = storedCustomerID.User_ID;
    console.log(this.customerID);
    this.authService.getWishlistById(this.customerID).subscribe((data: any) => {
      this.wishlistItems = data;
      if (this.wishlistItems.length == 0) {
        this.noItems = true;
      } else {
        this.noItems = false;
      }
      // console.log(this.wishlistItems);
      for (let i = 0; i < this.wishlistItems.length; i++) {
        this.authService.getProduct(this.wishlistItems[i].Product_ID).subscribe((data: any) => {
          this.products.push(data);
        });
      }
      console.log(this.products);
      // console.log(this.wishlistItems);
    });
  }

  addToCart( id: number ): void {
    
  }

  removeFromWishlist( id: number): void {
    this.authService.deleteWishlist(id).subscribe((data: any) => {
      // console.log(data);
      // this.wishlistItems = data;
      this.products = [];
      this.ngOnInit();
      window.location.reload();
      // this.router.navigate(['/customer-wishlist']);
    });
  }
}
