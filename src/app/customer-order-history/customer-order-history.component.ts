import { Component } from '@angular/core';
interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface Order {
  id: number;
  date: string;
  status: string;
  items: OrderItem[];
  total: number;
}
@Component({
  selector: 'app-customer-order-history',
  templateUrl: './customer-order-history.component.html',
  styleUrls: ['./customer-order-history.component.css']
})
export class CustomerOrderHistoryComponent {
   orderHistory: Order[] = [
    {
      id: 1,
      date: '2023-07-15',
      status: 'Delivered',
      items: [
        {
          id: 1,
          name: 'Product 1',
          price: 29.99,
          quantity: 1,
          imageUrl: 'path/to/product1.jpg'
        },
        {
          id: 2,
          name: 'Product 2',
          price: 19.99,
          quantity: 2,
          imageUrl: 'path/to/product2.jpg'
        }
      ],
      total: 69.97
    },
    {
      id: 2,
      date: '2023-07-10',
      status: 'Shipped',
      items: [
        {
          id: 3,
          name: 'Product 3',
          price: 39.99,
          quantity: 1,
          imageUrl: 'path/to/product3.jpg'
        }
      ],
      total: 39.99
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
