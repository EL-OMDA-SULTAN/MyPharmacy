import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categoryForm: FormGroup;
  isUpdate: boolean = false;
  categoryId: number | null = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private categoriesService: CategoriesService
  ) {
    this.categoryForm = this.fb.group({
      Category_Name: ['', Validators.required],
      Is_deleted: [0, [Validators.required]],
      number_of_products: [0, [Validators.required]]
    });
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   if (id) {
    //     this.isUpdate = true;
    //     this.categoryId = +id;
    //     // this.categoriesService.getCategoryById(this.categoryId).subscribe(category => {
    //     //   this.categoryForm.patchValue({
    //     //     name: category.name
    //     //   });
    //     // });
    //   }
    // });
  }

  get fCategory() {
    return this.categoryForm.controls;
  }

  onSubmit(){
    if (this.categoryForm.invalid) {
      return;
    }
    // console.log(this.categoryForm.value);
      if (this.categoryForm.valid) {
      this.authService.addCategory(this.categoryForm.value).subscribe((response: any )=> {
        console.log(response);
          if(response['message'] == 'Category created successfully!'){
            this.router.navigate(['/categories']);
          }
          else{
            alert(response['message']);
          }
          // console.log('Category added successfully', response);
          // this.router.navigate(['/categories']);
        },
        (error: HttpErrorResponse) => {
          console.error('Error adding category', error);
          if (error.error.errors) {
            console.log('Validation errors:', error.error.errors);
          }
        }
      );
    }
    }
}
