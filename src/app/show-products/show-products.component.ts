
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products: any[] = [];
  pharmacyId: any;
  validationErrors: any = {};
  productForm!: FormGroup; // Use definite assignment assertion
  noProducts: boolean = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userData=sessionStorage.getItem('user');
    // console.log(userData)
    if (userData) {
      this.pharmacyId = JSON.parse(userData).User_ID;
    }
    // console.log(this.pharmacyId)
    this.loadProducts();
    this.initProductForm();
  }

  loadProducts() {
    this.authService.getProducts().subscribe({
      next: (response) => {
        for (let i = 0; i < response.length; i++) {
          if (response[i].Pharmacy_ID == this.pharmacyId) {
            this.products.push(response[i]);
          }
        }
        // this.products = response;
      },
      error: (error) => {
        console.error('Error loading products', error);
      }
    });
  }

  initProductForm() {
    this.productForm = this.formBuilder.group({
      Product_Name: ['', Validators.required],
      Description: ['', Validators.required],
      Price: ['', Validators.required],
      Quantity: ['', Validators.required],
      Expiry_Date: ['', Validators.required],
      image: [null]
    });
  }

  updateProduct(productId: number, updatedProductData: FormData) {
    this.authService.updateProduct(productId, updatedProductData).subscribe({
      next: (response) => {
        console.log('Product updated successfully', response);
        // Handle success response, e.g., navigate to another page or show a success message
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error updating product', error);
        if (error.status === 422 && error.error && error.error.errors) {
          // Log the detailed validation errors
          console.log('Validation errors:', error.error.errors);
          // Assign the errors to the validationErrors property
          this.validationErrors = error.error.errors;
        }
      }
    });
  }

  deleteProduct(productId: number) {
    this.authService.deleteProduct(productId).subscribe({
      next: (response) => {
        // reload the products
        this.products = [];
        this.ngOnInit();
      },
      error: (error) => {
        console.error('Error deleting product', error);
      }
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('Product_Name', this.productForm.get('Product_Name')?.value || '');
    formData.append('Description', this.productForm.get('Description')?.value || '');
    formData.append('Price', this.productForm.get('Price')?.value || '');
    formData.append('Quantity', this.productForm.get('Quantity')?.value || '');
    formData.append('Expiry_Date', this.productForm.get('Expiry_Date')?.value || '');
    formData.append('image', this.productForm.get('image')?.value||'');
    

    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.updateProduct(Number(productId), formData);
    }
  }
}

