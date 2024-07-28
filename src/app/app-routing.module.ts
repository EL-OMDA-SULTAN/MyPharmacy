import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { UpdateCustomerProfileComponent } from './update-customer-profile/update-customer-profile.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { CustomerWishlistComponent } from './customer-wishlist/customer-wishlist.component';
import { CustomerCheckoutComponent } from './customer-checkout/customer-checkout.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { ShowPharmaciesComponent } from './show-pharmacies/show-pharmacies.component';
import { CategoriesComponent } from './categories/categories.component';
import { SalesComponent } from './sales/sales.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { PharmacyAdminComponent } from './pharmacy-admin/pharmacy-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowSalesComponent } from './show-sales/show-sales.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:'customer-profile',component:CustomerProfileComponent},
  {path:'update-customer-profile',component:UpdateCustomerProfileComponent},
  {path:'customer-cart',component:CustomerCartComponent},
  {path:'customer-wishlist',component:CustomerWishlistComponent},
  {path:'customer-checkout',component:CustomerCheckoutComponent},
  {path:'customer-order-history',component:CustomerOrderHistoryComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about',component:AboutComponent},
  {path:'super-admin-dashboard',component:SuperAdminDashboardComponent},
  {path:'show-pharmacies',component:ShowPharmaciesComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'sales',component:SalesComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'pharmacy-admin',component:PharmacyAdminComponent},
  {path: 'add-product', component: AddProductComponent},
  { path: 'show-products', component: ShowProductsComponent },
  { path: 'pharmacy-sales', component: ShowSalesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
