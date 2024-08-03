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
  productDetails: any = [];
  categoryName: string = "";

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.authService.getProduct(productId).subscribe(
        (data: any) => {
          this.productDetails = data;
          const categoryID = this.productDetails.Category_Id;
          this.authService.getCategoryById(categoryID).subscribe(
            (categoryData: any) => {
              this.categoryName = categoryData.Category_Name;
              console.log('Category Name:', this.categoryName);
              console.log('Product Details:', this.productDetails);
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
  }

  addToCart() {
    const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
    if (!userData.Customer_ID) {
      console.error('No customer ID found in session');
      return;
    }

    const order = {
      Customer_ID: userData.Customer_ID,
      Product_ID: this.productDetails.Product_ID,
      Product_Name: this.productDetails.Product_Name,
      Price: this.productDetails.Price,
      imageUrl: this.productDetails.imageUrl,
      quantity: 1, // Default to 1, update if necessary
      Order_Status: 'Pending',
      Is_deleted: 0
    };

    console.log('Order being sent:', order);

    this.basketService.addToBasket(order).subscribe(
      response => {
        console.log('Product added to basket:', response);
      },
      error => {
        console.error('Error adding product to basket:', error);
      }
    );
  }

  addToWishlist(productID: number) {
    // Implement add to wishlist logic
  }
}
