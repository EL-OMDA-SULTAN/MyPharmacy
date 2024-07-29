import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerForm!: FormGroup;
  pharmacyForm!: FormGroup;
  userType: string = 'customer';
  submittedCustomer = false;
  submittedPharmacy = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    

    this.pharmacyForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get fCustomer() {
    return this.customerForm.controls;
  }

  get fPharmacy() {
    return this.pharmacyForm.controls;
  }

  switchUserType(type: string): void {
    this.userType = type;
  }

  onSubmit(): void {
    if (this.userType === 'customer') {
      this.submittedCustomer = true;
      if (this.customerForm.valid) {
        const data = {
          Customer_Name: this.customerForm.value.name, // Map to backend key
          Customer_Email: this.customerForm.value.email, // Map to backend key
          Customer_Password: this.customerForm.value.password // Map to backend key
        };
        this.authService.registerCustomer(data).subscribe(
          response => {
            console.log('Customer registered successfully:', response);
          },
          error => {
            console.log('Registration error:', error);
            if (error.error.errors) {
              console.log('Validation errors:', error.error.errors);
            }
          }
        );
      }
    }else if (this.userType === 'pharmacy') {
      this.submittedPharmacy = true;
      if (this.pharmacyForm.valid) {
        console.log('Pharmacy Form Data:', this.pharmacyForm.value);
        const pharmacyData = {
          Pharmacy_Name: this.pharmacyForm.value.name,
          Address: this.pharmacyForm.value.address,
          Phone_Number: this.pharmacyForm.value.phoneNumber,
          User_Email: this.pharmacyForm.value.email,
          User_Password: this.pharmacyForm.value.password
        };
  
        this.authService.registerPharmacy(pharmacyData).subscribe(
          response => {
            console.log('Pharmacy registered successfully:', response);
          },
          error => {
            console.log('Registration error:', error);
            if (error.error.errors) {
              console.log('Validation errors:', error.error.errors);
            }
          }
        );
      }
    }
  }
}