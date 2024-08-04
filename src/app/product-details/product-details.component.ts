import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any = {};  // Initialize with an empty object
  categoryName: string = "";
  customerId?: number;
  productId?: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    console.log('Product ID Param:', productIdParam);
    if (productIdParam) {
      this.productId = Number(productIdParam);
      this.authService.getProduct(this.productId).subscribe(
        (data: any) => {
          console.log('Product Details:', data);
          this.productDetails = data;
          const categoryID = this.productDetails.Category_Id;
          this.authService.getCategoryById(categoryID).subscribe(
            (categoryData: any) => {
              console.log('Category Name:', categoryData.Category_Name);
              this.categoryName = categoryData.Category_Name;
            },
            (error: any) => {
              console.error('Error fetching category data:', error);
            }
          );
        },
        (error: any) => {
          console.error('Error fetching product data:', error);
        }
      );
    }
    
    const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
    console.log('User Data:', userData);
    this.customerId = userData.Customer_ID;
    console.log(this.customerId);
  }
  
  

  addToCart(productId: number): void {
    if (!this.customerId || !this.productDetails) {
      console.error('No customer ID or product details found');
      return;
    }
  
    const order = {
      Customer_ID: this.customerId,
      Product_ID: productId,
      Product_Name: this.productDetails.Product_Name,
      Price: this.productDetails.Price,
      imageUrl: this.productDetails.imageUrl,
      quantity: 1,
      Order_Status: 'Pending',
      Is_deleted: 0
    };
  
    this.basketService.addToBasket(order).subscribe(
      response => {
        console.log('Product added to basket:', response);
      },
      error => {
        console.error('Error adding product to basket:', error);
      }
    );
  }
  
  
  addToWishlist() {
    // console.log(this.customerId, this.productId);
    if (!this.customerId || !this.productId) {
      console.error('Customer ID or Product ID is missing');
      return;
    }

    this.authService.addWishlist(this.customerId, this.productId).subscribe((data: any) => {
      console.log(data);
    });

    this.router.navigate(['/customer-wishlist']);
  }
}
