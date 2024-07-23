import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  sales: any = [
    {
      id: 1,
      pharmacy: 'Pharmacy A',
      customer: 'Customer A',
      totalAmount: 100.00,
      saleDate: '2022-01-01'
    },
    {
      id: 2,
      pharmacy: 'Pharmacy B',
      customer: 'Customer B',
      totalAmount: 200.00,
      saleDate: '2022-02-01'
    },
    {
      id: 3,
      pharmacy: 'Pharmacy C',
      customer: 'Customer C',
      totalAmount: 300.00,
      saleDate: '2022-03-01'
    }
  ];
}
