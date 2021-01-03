import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CustomerserviceService } from './Service/customerservice.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { DisplayAllProductsComponent } from './display-all-products/display-all-products.component';
import { SortProductsComponent } from './sort-products/sort-products.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { CartComponent } from './cart/cart.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { GetorderdetailsComponent } from './getorderdetails/getorderdetails.component';
import { ReatailersigninComponent } from './reatailersignin/reatailersignin.component';
import { RetailerheaderComponent } from './retailerheader/retailerheader.component';
import { RetailerhomeComponent } from './retailerhome/retailerhome.component';
import { RetailersignupComponent } from './retailersignup/retailersignup.component';
import { RetailerAddProductComponent } from './retailer-add-product/retailer-add-product.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HomeComponent,
    LoginComponent,
    DisplayAllProductsComponent,
    SortProductsComponent,
    FilterProductsComponent,
    CartComponent,
    SearchproductComponent,
    HeaderComponent,
    FooterComponent,
    WishlistComponent,
    GetorderdetailsComponent,
    ReatailersigninComponent,
    RetailerheaderComponent,
    RetailerhomeComponent,
    RetailersignupComponent,
    RetailerAddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
