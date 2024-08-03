import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  constructor( private route: Router,private authService: AuthService,private router:ActivatedRoute ) { }

  productDetails: any = [];
  categoryName:any="";
  // productID: any;

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.route.navigate(['/login']);
    }
    const productId = this.router.snapshot.paramMap.get('id');
    this.authService.getProduct(productId).subscribe ((data: any)=> {
      this.productDetails = data;
      // console.log(this.productDetails.Category_Id);
      const categoryID = this.productDetails.Category_Id;
      this.authService.getCategoryById(categoryID).subscribe((data: any) => {
        this.categoryName = data.Category_Name;
        console.log(this.categoryName);
      })
      // console.log(productId);
      // console.log(this.productDetails);
    });
  }
  addToCart(productID: number) {
    // this.authService.addToCart(productID);
  }
  addToWishlist(productID: number) {
    // this.authService.addToWishlist(productID);
  }

}
