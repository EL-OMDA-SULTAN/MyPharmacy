import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
  customer = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    address: '123 Main St, City, Country',
    profilePictureUrl: 'assets/profile-placeholder.png'
  };

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToUpdateProfile() {
    this.router.navigate(['/customer/update-profile']);
  }
}
