import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { BasketService } from '../basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any = [];
  categoryName:any="";
  productID: any = 0;
  customerId: any = 0;
  constructor(private authService: AuthService, private route: Router, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    const productId = this.router.snapshot.paramMap.get('id');
    this.productID = productId;
    const customerId = JSON.parse(sessionStorage.getItem('userData') || '{}');
    this.customerId = customerId.Customer_ID;

    console.log(this.customerId, this.productID);
    
    this.authService.getProduct(productId).subscribe ((data: any)=> {
      this.productDetails = data;
      // console.log(this.productDetails.Category_Id);
      const categoryID = this.productDetails.Category_Id;
      this.authService.getCategoryById(categoryID).subscribe((data: any) => {
        this.categoryName = data.Category_Name;
      })
    });
  }
  addToCart(productID: number) {
    // this.authService.addToCart(productID);
  }
  addToWishlist() {
    this.authService.addWishlist( this.customerId, this.productID);
      this.route.navigate(['/customer-wishlist']);
  }
}
