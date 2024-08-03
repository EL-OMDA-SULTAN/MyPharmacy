import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { BasketService } from '../basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any = [];
  categoryName:any="";
  // productID: any;
  pharmacyName: any = "";
  customerId:number=0;
  productId:number=0;
  constructor(private authService: AuthService, private route: Router, private router: ActivatedRoute) { }
  ngOnInit(): void {
    // if(this.authService.isLoggedIn()){
    //   this.route.navigate(['/login']);
    // }
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.customerId = user.User_ID;
    const productId = this.router.snapshot.paramMap.get('id');
    this.productId = Number(productId);
    // console.log(this.productId);
    // console.log(this.customerId);
    this.authService.getProduct(productId).subscribe ((data: any)=> {
      this.productDetails = data;
      // console.log(this.productDetails.Category_Id);
      const categoryID = this.productDetails.Category_Id;
      this.authService.getCategoryById(categoryID).subscribe((data: any) => {
        this.categoryName = data.Category_Name;
        // console.log(this.categoryName);
      })
      // console.log(productId);
      // console.log(this.productDetails);
        // console.log(this.categoryName);
      });
      const pharmacyID = this.productDetails.Pharmacy_ID;
      this.authService.getPharmacyById(pharmacyID).subscribe((data: any) => {
        this.pharmacyName = data.Pharmacy_Name;
        // console.log(this.pharmacyName);
      });
    // console.log(this.productId,this.customerId);
  }
  addToCart(productID: number) {
    // this.authService.addToCart(productID);
  }
    // this.authService.addToWishlist(productID);
  addToWishlist(){
    this.authService.addWishlist(this.customerId,this.productId).subscribe((data: any) => {
      console.log(data);
    })
      this.route.navigate(['/customer-wishlist']);
  }
}
