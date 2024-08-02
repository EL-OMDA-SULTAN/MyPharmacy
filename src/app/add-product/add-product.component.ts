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
  pharmacyId:any;
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
    )
  }

  onSubmit() {
    // console.log(this.productForm.value);
    const formData = new FormData();
    formData.append('Pharmacy_ID', this.pharmacyId);
    formData.append('Product_Name', this.productForm.value.Product_Name);
    formData.append('Description', this.productForm.value.Description);
    formData.append('Price', this.productForm.value.Price);
    formData.append('Expiry_Date', this.productForm.value.Expiry_Date);
    formData.append('Quantity', this.productForm.value.Quantity);
    formData.append('Category_Id', this.productForm.value.Category_Id);
    formData.append('image', this.selectedFile!);
    formData.append('Is_deleted', this.productForm.value.Is_deleted);
    console.log('FormData content:', formData);
    //   for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }
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
