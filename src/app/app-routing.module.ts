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
  {path:'customer-order-history',component:CustomerOrderHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
