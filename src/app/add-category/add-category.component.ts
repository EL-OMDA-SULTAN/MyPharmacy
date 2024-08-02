import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  isUpdate: boolean = false;
  categoryId: number | null = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      Category_Name: ['', Validators.required],
      Is_deleted: [0],
      number_of_products: [0]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isUpdate = true;
        this.categoryId = +id;
        this.authService.getCategoryById(this.categoryId).subscribe(
          (category: any) => {
            this.categoryForm.patchValue({
              Category_Name: category.Category_Name,
              Is_deleted: category.Is_deleted,
              number_of_products: category.number_of_products
            });
          },
          (error: HttpErrorResponse) => {
            console.error('Error loading category details:', error);
          }
        );
      }
    });
  }

  get fCategory() {
    return this.categoryForm.controls;
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }

    if (this.isUpdate && this.categoryId !== null) {
      this.authService.updateCategory(this.categoryId, this.categoryForm.value).subscribe(
        (response: any) => {
          if (response.status) {
            this.router.navigate(['/categories']);
          } else {
            alert(response.message);
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error updating category:', error);
        }
      );
    } else {
      this.authService.addCategory(this.categoryForm.value).subscribe(
        (response: any) => {
          if (response.message === 'Category created successfully!') {
            this.router.navigate(['/categories']);
          } else {
            alert(response.message);
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error adding category:', error);
          if (error.error.errors) {
            console.log('Validation errors:', error.error.errors);
          }
        }
      );
    }
  }
}