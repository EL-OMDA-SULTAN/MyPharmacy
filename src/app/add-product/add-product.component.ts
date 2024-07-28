import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: { name: string; category: string; price: number | null; quantity: number | null; description: string } = {
    name: '',
    category: '',
    price: null,
    quantity: null,
    description: ''
  };

  products: { name: string; category: string; price: number | null; quantity: number | null; description: string }[] = [];

  onSubmit() {
    this.products.push({ ...this.product });
    console.log('Product added:', this.product);
    console.log('All products:', this.products);
    this.resetForm();
  }

  resetForm() {
    this.product = {
      name: '',
      category: '',
      price: null,
      quantity: null,
      description: ''
    };
  }
}
