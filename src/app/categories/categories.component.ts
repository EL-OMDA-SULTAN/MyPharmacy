import { trigger, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
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
export class CategoriesComponent {
  constructor(   private authService: AuthService,private router: Router) {}
  categories : any = [];
  rowsPerPage = 5;
  currentPage = 1;
  totalPages = 0;
  visibleCategories : any = [];
  visiblePages : any= [];

  ngOnInit() {
    this.authService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
        // console.log(this.categories);
        this.updateTable();
        this.updatePagination();
      },
      (error) => {
        console.error(error);
      }
    )
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
  console.log(id); // Debug: Check the id value
  this.authService.deleteCategory(id).subscribe(
    response => {
      console.log(response); // Handle the response if needed
      // Optionally, update the UI or notify the user
    },
    error => {
      console.error(error); // Handle any errors
    }
  );
}
}
