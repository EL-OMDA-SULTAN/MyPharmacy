import { trigger, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CategoriesComponent {
   categories = [
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    { id: 1, name: 'Category 1', products: 10 },
    { id: 2, name: 'Category 2', products: 15 },
    { id: 3, name: 'Category 3', products: 7 },
    // Add more categories as needed
  ];
   rowsPerPage = 5;
  currentPage = 1;
  totalPages = 0;
  visibleCategories : any = [];
  visiblePages : any= [];

  ngOnInit() {
    this.updateTable();
    this.updatePagination();
  }

  updateTable() {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.visibleCategories = this.categories.slice(startIndex, endIndex);
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.categories.length / this.rowsPerPage);
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

  editCategory(id: number) {
    alert(`Edit category with ID: ${id}`);
  }

  deleteCategory(id: number) {
    alert(`Delete category with ID: ${id}`);
    this.categories = this.categories.filter(category => category.id !== id);
    this.updateTable();
    this.updatePagination();
  }
}
