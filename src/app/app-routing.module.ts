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
import { BestSalesComponent } from './best-sales/best-sales.component';
import { BestSallerPharmacyComponent } from './best-saller-pharmacy/best-saller-pharmacy.component';

import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { PharmacyAdminGuard } from './pharmacy-admin.guard';
import { CustomerGuard } from './customer.guard';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent ,canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent ,canActivate:[AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'customer-profile', component: CustomerProfileComponent, canActivate: [CustomerGuard] },
  { path: 'update-customer-profile', component: UpdateCustomerProfileComponent, canActivate: [CustomerGuard] },
  { path: 'customer-cart', component: CustomerCartComponent, canActivate: [CustomerGuard] },
  { path: 'customer-wishlist', component: CustomerWishlistComponent, canActivate: [CustomerGuard] },
  { path: 'customer-checkout', component: CustomerCheckoutComponent, canActivate: [CustomerGuard] },
  { path: 'customer-order-history', component: CustomerOrderHistoryComponent, canActivate: [CustomerGuard] },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'super-admin-dashboard', component: SuperAdminDashboardComponent, canActivate: [AdminGuard] },
  { path: 'show-pharmacies', component: ShowPharmaciesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'add-category', component: AddCategoryComponent, canActivate: [AdminGuard] },
  { path: 'add-category/{id}', component: AddCategoryComponent, canActivate: [AdminGuard] },
  { path: 'pharmacy-admin', component: PharmacyAdminComponent, canActivate: [PharmacyAdminGuard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [PharmacyAdminGuard] },
  { path: 'add-product/:id', component: AddProductComponent, canActivate: [PharmacyAdminGuard] },
  { path: 'show-products', component: ShowProductsComponent },
// <<<<<<< HEAD
  { path: 'pharmacy-sales', component: ShowSalesComponent },
  { path: 'edit-category/:id', component: AddCategoryComponent },
  {path:'best-sales',component:BestSalesComponent},
  {path:'best-saller-pharmacy',component:BestSallerPharmacyComponent},
  {path:'category-details',component:CategoryDetailsComponent},
  {path:'category-details/:id',component:CategoryDetailsComponent},
  {path:'pharmacy-details',component:PharmacyDetailsComponent},
  {path:'pharmacy-details/:id',component:PharmacyDetailsComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  { path: 'pharmacy-sales', component: ShowSalesComponent }
// >>>>>>> 50fb2253fa2ba4f1d53c705d944f1813fb617ba6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
