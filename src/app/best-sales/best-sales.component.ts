import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-best-sales',
  templateUrl: './best-sales.component.html',
  styleUrls: ['./best-sales.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class BestSalesComponent {
  best_sales=[
    {id: 1, name: 'Sale 1', price: 10.99, quantity: 5},
    {id: 2, name: 'Sale 2', price: 15.99, quantity: 3},
    {id: 3, name: 'Sale 3', price: 8.99, quantity: 8},
    {id: 4, name: 'Sale 4', price: 12.99, quantity: 2},
    {id: 5, name: 'Sale 5', price: 20.99, quantity: 1},
    {id: 6, name: 'Sale 6', price: 18.99, quantity: 4},
    {id: 7, name: 'Sale 7', price: 14.99, quantity: 6},
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
    this.visibleSales = this.best_sales.slice(startIndex, endIndex);
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.best_sales.length / this.rowsPerPage);
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
