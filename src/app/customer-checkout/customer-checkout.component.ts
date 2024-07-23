import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
@Component({
  selector: 'app-customer-checkout',
  templateUrl: './customer-checkout.component.html',
  styleUrls: ['./customer-checkout.component.css']
})
export class CustomerCheckoutComponent {
  checkoutForm: FormGroup;
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

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required, Validators.pattern(/^\d{10}$/)],
    });
  }

  get fCheckout() {
    return this.checkoutForm.controls;
  }
  ngOnInit(): void {}

  placeOrder(): void {
    if (this.checkoutForm.valid) {
      // Implement place order logic here
      alert('Order placed successfully!');
    }
  }
}
