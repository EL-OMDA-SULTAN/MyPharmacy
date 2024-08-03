import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  formName: string = 'Add Product';
  isUpdate: boolean = false;
  productId: any ;
  selectedFile: File | null = null;
  successMessage: string | null = null;
  categories: any[] = [];
  pharmacyId: any;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
      this.productForm = this.fb.group({
        Product_Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        Category_Id: ['', Validators.required],
        Description: ['', [Validators.required, Validators.maxLength(500)]],
        Price: ['', Validators.required],
        Expiry_Date: ['', Validators.required],
        Quantity: ['', Validators.required],
        image: ['', Validators.required],
        fileSource:[''],
        Is_deleted: [0],
      }
    );
    this.productId = this.route.snapshot.params['id'];
    // console.log(this.productId);
    if (this.productId) {
      this.isUpdate = true;
      this.formName = 'Update Product';
      this.authService.getProduct(this.productId).subscribe(
        (data: any) => {
          this.productForm.patchValue({
            Product_Name: data[0].Product_Name,
            Category_Id: data[0].Category_Id,
            Description: data[0].Description,
            Price: data[0].Price,
            Expiry_Date: data[0].Expiry_Date,
            Quantity: data[0].Quantity,});
          // this.productForm.patchValue(data[0]);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    const userString = sessionStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.pharmacyId = user.User_ID;
    }
    this.authService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  onSubmit() {
    if (this.productForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    if (this.isUpdate) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }
  addProduct() {
    const formData = new FormData();
    formData.append('Pharmacy_ID', this.pharmacyId);
    formData.append('Product_Name', this.productForm.get('Product_Name')?.value);
    formData.append('Description', this.productForm.get('Description')?.value);
    formData.append('Price', this.productForm.get('Price')?.value);
    formData.append('Expiry_Date', this.productForm.get('Expiry_Date')?.value);
    formData.append('Quantity', this.productForm.get('Quantity')?.value);
    formData.append('Category_Id', this.productForm.get('Category_Id')?.value);
    formData.append('fileSource', this.productForm.get('fileSource')?.value);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    formData.append('Is_deleted', this.productForm.get('Is_deleted')?.value);
    this.authService.addProduct(formData).subscribe(
      (response) => {
        this.successMessage = 'Product added successfully';
        this.router.navigate(['/show-products']);
        setTimeout(() => {
          this.successMessage = null;
          this.router.navigate(['/show-products']);
        }, 3000);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  updateProduct() {
    const formData = new FormData();
    formData.append('Pharmacy_ID', this.pharmacyId);
    formData.append('Product_Name', this.productForm.get('Product_Name')?.value);
    formData.append('Description', this.productForm.get('Description')?.value);
    formData.append('Price', this.productForm.get('Price')?.value);
    formData.append('Expiry_Date', this.productForm.get('Expiry_Date')?.value);
    formData.append('Quantity', this.productForm.get('Quantity')?.value);
    formData.append('Category_Id', this.productForm.get('Category_Id')?.value);
    formData.append('fileSource', this.productForm.get('fileSource')?.value);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    formData.append('Is_deleted', this.productForm.get('Is_deleted')?.value);
    //parse id to number
    this.productId = Number(this.productId);
    // console.log(this.productId);
    // console.log(this.productForm.value);
    console.log('FormData content:', formData);
   
    this.authService.updateProduct(this.productId,formData).subscribe(
      (response) => {
        this.successMessage = 'Product updated successfully';
        this.router.navigate(['/show-products']);
        setTimeout(() => {
          this.successMessage = null;
          this.router.navigate(['/show-products']);
        }, 3000);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  get fProduct() { return this.productForm.controls; }
}