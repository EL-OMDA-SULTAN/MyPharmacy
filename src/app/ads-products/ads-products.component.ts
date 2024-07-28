import { Component } from '@angular/core';

@Component({
  selector: 'app-ads-products',
  templateUrl: './ads-products.component.html',
  styleUrls: ['./ads-products.component.css']
})
export class AdsProductsComponent {


  products = [
    { name: 'Cerave Moisturising Cream 177Gm -Tube', price: 300, image: 'assets/images/carve1.jpg' },
    { name: 'Cerave Moisturizing Cream 340 Grams', price: 944, image: 'assets/images/carve2.jpg' },
    { name: 'Cerave - Pm Facial Moisturising Lotion For Normal To Dry Skin 52 Ml', price: 695, image: 'assets/images/carve3.jpg' },
    { name: 'Shaan Soothing Gel W/Aloe Vera 120Gm', price: 666, image: 'assets/images/shaan1.jpg' },
    { name: 'Shaan Rejuven Cream 120Gm', price: 615, image: 'assets/images/shaan2.jpg' },
    { name: 'Hayah Melatex Lightening Cream 50Ml', price: 230, image: 'assets/images/product7.jpg' },
    // { name: 'Twist & Go Volumizing Shampoo 300Ml', price: 295, image: 'assets/images/product8.jpg' },
    // { name: 'Garnier 30X Vitamin C Booster Serum 30ML', price: 285, image: 'assets/images/product9.jpg' }
  ];

  productChunks: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productChunks = this.chunkArray(this.products, 6); // Adjust the chunk size if necessary
  }

  chunkArray(array: any[], size: number): any[] {
    const result: any[] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }


}
