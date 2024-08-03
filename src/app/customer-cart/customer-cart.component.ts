import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { catchError, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    const customerId = this.getCustomerIdFromSession();
    if (customerId) {
      this.basketService.getCartItems(customerId).pipe(
        catchError(error => {
          console.error('Error fetching cart items:', error);
          return of([]);
        })
      ).subscribe(
        items => {
          const productObservables = items.map(item =>
            this.basketService.getProduct(item.Product_ID)
          );
          
          forkJoin(productObservables).subscribe(
            products => {
              // Combine cart items and product details
              this.cartItems = this.combineItemsAndProducts(items, products);

              // Log cart items to inspect image paths and other details
              console.log('Cart Items:', this.cartItems);
            },
            error => {
              console.error('Error fetching product details:', error);
            }
          );
        }
      );
    }
  }

  // Combine items with product details and handle duplicate products
  private combineItemsAndProducts(items: any[], products: any[]): any[] {
    const cartMap = new Map<number, any>();

    items.forEach((item, index) => {
      const product = products[index];
      const existingItem = cartMap.get(item.Product_ID);

      if (existingItem) {
        // Update quantity for existing product
        existingItem.quantity += 1;
      } else {
        // Add new product with initial quantity
        cartMap.set(item.Product_ID, {
          ...item,
          ...product,
          quantity: 1
        });
      }
    });

    return Array.from(cartMap.values());
  }

  get total(): number {
    return this.cartItems.reduce((acc, item) => acc + item.Price * item.quantity, 0);
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.basketService.updateCartItem(item).subscribe(
      updatedOrder => {
        const index = this.cartItems.findIndex(i => i.Product_ID === updatedOrder.Product_ID);
        if (index > -1) {
          this.cartItems[index] = updatedOrder;
        }
      },
      error => {
        console.error('Error updating cart item:', error);
      }
    );
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.basketService.updateCartItem(item).subscribe(
        updatedOrder => {
          const index = this.cartItems.findIndex(i => i.Product_ID === updatedOrder.Product_ID);
          if (index > -1) {
            this.cartItems[index] = updatedOrder;
          }
        },
        error => {
          console.error('Error updating cart item:', error);
        }
      );
    }
  }

  removeItem(item: any): void {
    const customerId = this.getCustomerIdFromSession();
    if (customerId) {
      this.basketService.removeCartItem(item.Product_ID, customerId).subscribe(
        () => {
          this.cartItems = this.cartItems.filter(i => i.Product_ID !== item.Product_ID);
        },
        error => {
          console.error('Error removing cart item:', error);
        }
      );
    }
  }
  

  checkout(): void {
    alert('Proceeding to checkout...');
  }

  private getCustomerIdFromSession(): number | null {
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      return parsedData.Customer_ID;
    }
    return null;
  }
}
