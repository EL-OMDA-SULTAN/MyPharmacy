import { Component } from '@angular/core';

@Component({
  selector: 'app-shopby-brands',
  templateUrl: './shopby-brands.component.html',
  styleUrls: ['./shopby-brands.component.css']
})
export class ShopbyBrandsComponent {
  brands = [
    { image: 'assets/images/avene.png', name: 'Avène' },
    { image: 'assets/images/bioderma.png', name: 'Bioderma' },
    { image: 'assets/images/eucerin.png', name: 'Eucerin' },
    { image: 'assets/images/matriskin.png', name: 'Matriskin' },
    { image: 'assets/images/loreal.png', name: 'L\'Oréal' }
  ];

  brandChunks: { image: string; name: string; }[][] = this.chunkArray(this.brands, 5);

  chunkArray(arr: { image: string; name: string; }[], size: number): { image: string; name: string; }[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
}
