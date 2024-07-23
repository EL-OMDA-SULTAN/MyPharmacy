import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customerForm: FormGroup;
  pharmacyForm: FormGroup;
  submittedCustomer = false;
  submittedPharmacy = false;
  userType: 'customer' | 'pharmacy' = 'customer';

  constructor(private formBuilder: FormBuilder) {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]]
    });
    // , { validators: this.passwordMatchValidator });

    this.pharmacyForm = this.formBuilder.group({
      name: ['', Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]]
    });
    // , { validators: this.passwordMatchValidator });
  }

  // Getter for easy access to form fields
  get fCustomer() { return this.customerForm.controls; }
  get fPharmacy() { return this.pharmacyForm.controls; }

  onSubmit() {
    if (this.userType === 'customer') {
      this.submittedCustomer = true;

      if (this.customerForm.invalid) {
        return;
      }

      // Handle successful customer registration
      console.log('Customer Registration SUCCESS!!', this.customerForm.value);
    } else {
      this.submittedPharmacy = true;

      if (this.pharmacyForm.invalid) {
        return;
      }

      // Handle successful pharmacy registration
      console.log('Pharmacy Registration SUCCESS!!', this.pharmacyForm.value);
    }
  }

  // passwordMatchValidator(formGroup: FormGroup) {
  //   const password = formGroup.get('password')?.value;
  //   const repeatPassword = formGroup.get('repeatPassword')?.value;

  //   if (password !== repeatPassword) {
  //     return { passwordMismatch: true };
  //   }
  //   return null;
  // }

  switchUserType(type: 'customer' | 'pharmacy') {
    this.userType = type;
    this.submittedCustomer = false;
    this.submittedPharmacy = false;
    this.customerForm.reset();
    this.pharmacyForm.reset();
  }
}

