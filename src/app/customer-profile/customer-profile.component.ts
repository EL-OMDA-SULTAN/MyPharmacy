import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
  customer:any=[];

  constructor(private router: Router) { }

  ngOnInit(): void {

    const customerData=sessionStorage.getItem('user');
    this.customer = JSON.parse(customerData || '{}');
    console.log(customerData);
  }

  goToUpdateProfile() {
    this.router.navigate(['/customer/update-profile']);
  }
}
