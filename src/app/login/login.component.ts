import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      User_Email: ['', [Validators.required, Validators.email]],
      User_Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log('Request Payload:', this.loginForm.value); // Log the payload

    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        console.log('Login SUCCESS!!', response);
        // Save user info in session storage
        sessionStorage.setItem('user', JSON.stringify(response.user));
        sessionStorage.setItem('userType', response.userType);

        if (response.userData) {
          sessionStorage.setItem('userData', JSON.stringify(response.userData));
        }

        // Redirect to home page
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        console.error('Login failed', error);
        alert('Login failed. Please check your credentials and try again.');
        if (error.error.errors) {
          console.log('Validation errors:', error.error.errors);
        }
      }
    );
  }
}
