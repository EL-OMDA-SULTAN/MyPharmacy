import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private categoriesService: CategoriesService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isUpdate = true;
        this.categoryId = +id;
        // this.categoriesService.getCategoryById(this.categoryId).subscribe(category => {
        //   this.categoryForm.patchValue({
        //     name: category.name
        //   });
        // });
      }
    });
  }

  get fCategory() {
    return this.categoryForm.controls;
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      if (this.isUpdate && this.categoryId !== null) {
        // this.categoriesService.updateCategory(this.categoryId, this.categoryForm.value).subscribe(() => {
        //   this.router.navigate(['/categories']);
        // });
      } else {
        // this.categoriesService.addCategory(this.categoryForm.value).subscribe(() => {
        //   this.router.navigate(['/categories']);
        // });
      }
    }
  }
}
