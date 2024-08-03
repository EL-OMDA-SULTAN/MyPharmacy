import { trigger, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  rowsPerPage = 5;
  currentPage = 1;
  totalPages = 0;
  visibleCategories: any[] = [];
  visiblePages: number[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.authService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
        this.updateTable();
        this.updatePagination();
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
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

  editCategory(categoryId: number) {
    this.router.navigate(['/edit-category', categoryId]);
  }

  deleteCategory(categoryId: number) {
    this.authService.deleteCategory(categoryId).subscribe(
      response => {
        // console.log(response);
        // Optionally, update the UI or notify the user
        this.ngOnInit(); // Refresh the category list after deletion
      },
      error => {
        console.error(error);
      }
    );
  }
}
