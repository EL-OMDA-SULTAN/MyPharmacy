import { Component } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a great product.',
      price: 29.99,
      quantity: 1,
      imageUrl: 'path/to/product1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is another great product.',
      price: 19.99,
      quantity: 2,
      imageUrl: 'path/to/product2.jpg'
    }
  ];

  get total(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  constructor() {}

  ngOnInit(): void {}

  increaseQuantity(item: CartItem): void {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  checkout(): void {
    // Implement checkout logic here
    alert('Proceeding to checkout...');
  }
}
