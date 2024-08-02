import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent {
  products:any=[];
  customers:any=[];
  pharmacies:any=[];
  num_of_products:number=0;
  num_of_pharmacies:number=0;
  num_of_customers:number=0
  constructor(private authService:AuthService, private apiservice: ApiService) { }

  ngOnInit(): void {
    this.authService.getProducts().subscribe((data:any)=>{
      this.products=data;
      this.num_of_products=data.length;
    });
    this.authService.getCustomer().subscribe((data:any)=>{
      this.customers=data;
      // console.log(data);
      this.num_of_customers=data.length;
    });
    this.authService.getPharmacy().subscribe((data:any)=>{
      this.pharmacies=data;
      this.num_of_pharmacies=data.length;
    });
  }

}
