import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-sellers-slider',
  templateUrl: './best-sellers-slider.component.html',
  styleUrls: ['./best-sellers-slider.component.css']
})
export class BestSellersSliderComponent implements OnInit {

  products = [
    { name: 'Premier Premcrystal Hair Mask 400Gm', price: 300, image: 'assets/images/product1.jpg' },
    { name: 'Cura Zona Intensive Hair Loss Spray 150Ml', price: 944, image: 'assets/images/product2.jpg' },
    { name: 'Lixora Sk Hair Ampoules 8 Amp - 5Ml', price: 695, image: 'assets/images/product3.jpg' },
    { name: 'Beesline Instant Bright Day Cream 50ML', price: 666, image: 'assets/images/product4.jpg' },
    { name: 'Sesh Ready In Action Anti Aging Serum 30Ml', price: 615, image: 'assets/images/product5.jpg' },
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
