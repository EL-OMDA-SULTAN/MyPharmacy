import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer-profile',
  templateUrl: './update-customer-profile.component.html',
  styleUrls: ['./update-customer-profile.component.css']
})
export class UpdateCustomerProfileComponent {
  updateProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.updateProfileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  get fUpdateProfile() {
    return this.updateProfileForm.controls;
  }

  onSubmit() {
    if (this.updateProfileForm.valid) {
      console.log('Profile updated:', this.updateProfileForm.value);
      // Add your update logic here
    }
  }
}
