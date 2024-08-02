import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent  {
  products: any;
  isUpdated: boolean = false;
  productId: number | null = null;
  ngOnInit() {
    
  }
}
