import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent  {
  products: any=[];
  isUpdated: boolean = false;
  productId: number | null = null;
  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    this.authService.getProducts().subscribe(
      (response: any) => {
        this.products = response;
      },
      (error: any) => {
        console.error('Error retrieving products:', error);
      }
    );
  }

  deleteProduct(id: number) {
    this.authService.deleteProduct(id).subscribe(
      (response: any) => {
        console.log(response);
        this.authService.getProducts().subscribe(
          (response: any) => {
            this.ngOnInit();
          },
          (error: any) => {
            console.error('Error retrieving products:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
