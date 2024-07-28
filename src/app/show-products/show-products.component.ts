import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  @Input() products: { name: string; category: string; price: number | null; quantity: number | null; description: string }[] = [];

  ngOnInit() {
    // Adding manual products for demonstration
    this.products.push(
      { name: 'Product 1', category: 'Category 1', price: 100, quantity: 10, description: 'Description 1' },
      { name: 'Product 2', category: 'Category 2', price: 200, quantity: 20, description: 'Description 2' },
      { name: 'Product 3', category: 'Category 3', price: 300, quantity: 30, description: 'Description 3' }
    );
  }
}
