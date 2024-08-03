import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pharmacy-admin',
  templateUrl: './pharmacy-admin.component.html',
  styleUrls: ['./pharmacy-admin.component.css']
})
export class PharmacyAdminComponent {
    constructor(private router: Router,private authService: AuthService) { } 
    pharmacyId: any;
    products: any= [];

    ngOnInit(): void {
      const userData=sessionStorage.getItem('user');
      if (userData) {
        this.pharmacyId = JSON.parse(userData).User_ID;
      }
      this.authService.getProducts().subscribe((data) => {
        // console.log(data);
        // console.log(this.pharmacyId);
        for (let i = 0; i < data.length; i++) {
          if (data[i].Pharmacy_ID == this.pharmacyId) {
            this.products.push(data[i]);
          }
        }
        // console.log(this.products.length);
        // this.products = data;
      });
      // this.authService.getPharmacy().subscribe((data) => {
      //   this.pharmacyId = data;
      // });
    }

}
  



