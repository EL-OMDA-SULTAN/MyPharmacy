import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class SalesComponent {
  sales = [
    { id: 1, pharmacyName: 'Pharmacy 1', customerName: 'John Doe', customer: 'Customer 1', salesDate: '2023-07-01' },
    { id: 2, pharmacyName: 'Pharmacy 2', customerName: 'Jane Smith', customer: 'Customer 2', salesDate: '2023-07-02' },
    { id: 3, pharmacyName: 'Pharmacy 3', customerName: 'Bob Johnson', customer: 'Customer 3', salesDate: '2023-07-03' },
    { id: 4, pharmacyName: 'Pharmacy 4', customerName: 'Alice Brown', customer: 'Customer 4', salesDate: '2023-07-04' },
    { id: 5, pharmacyName: 'Pharmacy 5', customerName: 'Charlie Black', customer: 'Customer 5', salesDate: '2023-07-05' },
    { id: 6, pharmacyName: 'Pharmacy 6', customerName: 'Diana White', customer: 'Customer 6', salesDate: '2023-07-06' },
    { id: 7, pharmacyName: 'Pharmacy 7', customerName: 'Ethan Green', customer: 'Customer 7', salesDate: '2023-07-07' },
    // Add more sales as needed
  ];
  rowsPerPage = 5;
  currentPage = 1;
  totalPages = 0;
  visibleSales : any= [];
  visiblePages : any= [];

  ngOnInit() {
    this.updateTable();
    this.updatePagination();
  }

  updateTable() {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.visibleSales = this.sales.slice(startIndex, endIndex);
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.sales.length / this.rowsPerPage);
    this.visiblePages = [];

    for (let i = Math.max(1, this.currentPage - 1); i <= Math.min(this.totalPages, this.currentPage + 1); i++) {
      this.visiblePages.push(i);
    }
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updateTable();
    this.updatePagination();
  }

}
