import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  products = [
    {
      name: 'GARNIER',
      description: 'After-Makeup Care',
      image: 'assets/images/Gran.webp',
      brand: 'GARNIER'
    },
    {
      name: 'BOBAI',
      description: 'MUST-HAVE!',
      image: 'assets/images/Bobai.webp',
      brand: 'BOBAI'
    },
    {
      name: 'BEESLINE',
      description: 'Glowy Skin Bundles',
      image: 'assets/images/bees.webp',
      brand: 'BEESLINE'
    },
    {
      name: 'STARVILLE',
      description: 'Summer Heat Essentials',
      image: 'assets/images/star.webp',
      brand: 'STARVILLE'
    },
    {
      name: 'LOREAL HYALURON',
      description: 'Night Routine',
      image: 'assets/images/lorel.webp',
      brand: 'LOREAL HYALURON'
    },
    {
      name: 'IL SALONE',
      description: 'Hair Treatment',
      image: 'assets/images/salone.webp',
      brand: 'IL SALONE'
    }


    
  ];
  
  images = [
    { src: 'assets/images/image1.jpg', alt: 'Image 1 Description' },
    { src: 'assets/images/image2.jpg', alt: 'Image 2 Description' },
    { src: 'assets/images/image3.jpg', alt: 'Image 3 Description' }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
