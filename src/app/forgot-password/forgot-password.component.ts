import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  submitted = false;
  captchaCode: string;

  constructor(private formBuilder: FormBuilder) {
    this.captchaCode = this.generateCaptcha();
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      captcha: ['', [Validators.required, Validators.pattern(this.captchaCode)]]
    });
  }

  ngOnInit(): void {
    // If you need to perform any additional initialization in ngOnInit, you can do it here.
  }

  get f() { return this.forgotPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.forgotPasswordForm.invalid) {
      return;
    }

    console.log('Sending reset password email to:', this.forgotPasswordForm.value.email);
    // Implement the logic to send the reset password email here
  }

  generateCaptcha(): string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }
}
