import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-show-sales',
  templateUrl: './show-sales.component.html',
  styleUrls: ['./show-sales.component.css']
})
export class ShowSalesComponent {

  constructor() {
    // this.loadSalesData();
  }
  show_sales = [
    { id: 1, customerName: 'John Doe', name: 'Product 1', price: 10, quantity: 5, salesDate: '2022-01-01' },
    { id: 2, customerName: 'Jane Smith', name: 'Product 2', price: 15, quantity: 3, salesDate: '2022-01-02' },
    { id: 3, customerName: 'Bob Johnson', name: 'Product 3', price: 8, quantity: 8, salesDate: '2022-01-03' },
    { id: 4, customerName: 'Alice Brown', name: 'Product 4', price: 12, quantity: 2, salesDate: '2022-01-04' },
    { id: 5, customerName: 'Mike Davis', name: 'Product 5', price: 20, quantity: 1, salesDate: '2022-01-05' },
    { id: 6, customerName: 'Sarah Wilson', name: 'Product 6', price: 18, quantity: 4, salesDate: '2022-01-06' },
    { id: 7, customerName: 'Tom Brown', name: 'Product 7', price: 14, quantity: 6, salesDate: '2022-01-07' }
  ];

  ngOnInit() {
  }



  // loadSalesData() {
  //   const salesData = {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [
  //       {
  //         label: 'Sales',
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         fill: false,
  //         borderColor: 'rgba(75,192,192,1)',
  //         tension: 0.1
  //       }
  //     ]
  //   };

  //   const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'line',
  //     data: salesData,
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       scales: {
  //         x: {
  //           display: true,
  //           title: {
  //             display: true,
  //             text: 'Month'
  //           }
  //         },
  //         y: {
  //           display: true,
  //           title: {
  //             display: true,
  //             text: 'Sales'
  //           }
  //         }
  //       }
  //     }
  //   });
  // }
}
