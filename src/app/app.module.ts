import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { UpdateCustomerProfileComponent } from './update-customer-profile/update-customer-profile.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { CustomerWishlistComponent } from './customer-wishlist/customer-wishlist.component';
import { CustomerCheckoutComponent } from './customer-checkout/customer-checkout.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { ShowPharmaciesComponent } from './show-pharmacies/show-pharmacies.component';
import { SalesComponent } from './sales/sales.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SliderComponent } from './slider/slider.component';
import { CategoryButtonsComponent } from './category-buttons/category-buttons.component';
import { BestSellersSliderComponent } from './best-sellers-slider/best-sellers-slider.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { PharmacyAdminComponent } from './pharmacy-admin/pharmacy-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowSalesComponent } from './show-sales/show-sales.component';
import { ShopbyBrandsComponent } from './shopby-brands/shopby-brands.component';
import { AdsComponent } from './ads/ads.component';
import { AdsProductsComponent } from './ads-products/ads-products.component';
import { HttpClientModule } from '@angular/common/http';
import { BestSalesComponent } from './best-sales/best-sales.component';
import { BestSallerPharmacyComponent } from './best-saller-pharmacy/best-saller-pharmacy.component';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    CustomerProfileComponent,
    UpdateCustomerProfileComponent,
    CustomerCartComponent,
    CustomerWishlistComponent,
    CustomerCheckoutComponent,
    CustomerOrderHistoryComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    AboutComponent,
    SuperAdminDashboardComponent,
    ShowPharmaciesComponent,
    SalesComponent,
    CategoriesComponent,
    AddCategoryComponent,
    SliderComponent,
    CategoryButtonsComponent,
    BestSellersSliderComponent,
    FeaturedProductsComponent,
    PharmacyAdminComponent,
    AddProductComponent,
    SideNavbarComponent,
    ShowProductsComponent,
    ShowSalesComponent,
    ShopbyBrandsComponent,
    AdsComponent,
    AdsProductsComponent,
    BestSalesComponent,
    BestSallerPharmacyComponent,
    PharmacyDetailsComponent,
    ProductDetailsComponent,
    CategoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    // NgxTypedJsModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
