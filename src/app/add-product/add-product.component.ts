import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm:FormGroup;
  isUpdate: boolean = false;
  productId: number | null = null;
  selectedFile: File | null = null;
  successMessage: string | null = null;
  categories:any=[];
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.productForm = this.fb.group({
      Product_Name: ['', Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)],
      Category_Id: ['', Validators.required],
      Description: ['', Validators.required,Validators.maxLength(500)],
      Price: ['', Validators.required],
      Expiry_Date: ['', Validators.required],
      Quantity: ['', Validators.required],
      image: ['', Validators.required],
      Is_deleted: [0, [Validators.required]],

  } );
  }
    ngOnInit() {
    this.authService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
        // console.log(this.categories);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('Product_Name', this.productForm?.get('Product_Name')?.value);
    formData.append('Description', this.productForm?.get('Description')?.value);
    formData.append('Price', this.productForm?.get('Price')?.value);
    formData.append('Expiry_Date', this.productForm?.get('Expiry_Date')?.value);
    formData.append('Quantity', this.productForm?.get('Quantity')?.value);
    formData.append('Category_Id', this.productForm?.get('Category_Id')?.value);
    formData.append('image', this.selectedFile!);
    formData.append('Is_deleted', this.productForm?.get('Is_deleted')?.value);
    this.authService.addProduct(formData).subscribe(
      (response) => {
        console.log(response);
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

  get fProduct() { return this.productForm.controls; }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
