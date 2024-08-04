import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {

  categoryName: string = "";
  products: any[] = [];
  pagedProducts: any[] = [];
  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 1;
  pages: number[] = [];
  constructor( private router: Router,private authService: AuthService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const categoryId =Number(this.route.snapshot.paramMap.get('id'));
    // console.log(categoryId);
    this.fetchCategoryDetails(categoryId);
    this.fetchProducts(categoryId);
  }

  fetchCategoryDetails(categoryId: number): void {
    this.authService.getCategory(categoryId).subscribe(category => {
      this.categoryName = category.Category_Name;
      // console.log(this.categoryName);
    });
  }

  fetchProducts(categoryId: number): void {
    this.authService.getProducts().subscribe(products => {
      // console.log(products[0]);
      for (let i = 0; i < products.length; i++) {
        // console.log(products[i]);
        if (products[i].Category_Id === categoryId) {
          this.products.push(products[i]);
        }
      }
      // console.log(this.products);
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updatePagedProducts();
    });
  }

  updatePagedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedProducts = this.products.slice(startIndex, endIndex);
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.updatePagedProducts();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedProducts();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedProducts();
    }
  }

}
