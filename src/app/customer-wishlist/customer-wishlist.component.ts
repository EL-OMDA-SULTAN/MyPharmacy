import { Component } from '@angular/core';
interface WishlistItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
@Component({
  selector: 'app-customer-wishlist',
  templateUrl: './customer-wishlist.component.html',
  styleUrls: ['./customer-wishlist.component.css']
})
export class CustomerWishlistComponent {
   wishlistItems: WishlistItem[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a great product.',
      imageUrl: 'path/to/product1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is another great product.',
      imageUrl: 'path/to/product2.jpg'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(item: WishlistItem): void {
    // Implement add to cart logic here
    alert(`${item.name} added to cart!`);
  }

  removeFromWishlist(item: WishlistItem): void {
    this.wishlistItems = this.wishlistItems.filter(wishlistItem => wishlistItem.id !== item.id);
  }
}
