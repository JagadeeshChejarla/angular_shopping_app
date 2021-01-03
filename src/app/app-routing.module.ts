import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DisplayAllProductsComponent } from './display-all-products/display-all-products.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { GetorderdetailsComponent } from './getorderdetails/getorderdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReatailersigninComponent } from './reatailersignin/reatailersignin.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RetailerAddProductComponent } from './retailer-add-product/retailer-add-product.component';
import { RetailerhomeComponent } from './retailerhome/retailerhome.component';
import { RetailersignupComponent } from './retailersignup/retailersignup.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { SortProductsComponent } from './sort-products/sort-products.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path : '', redirectTo : '/home', pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
  {path:'user-register', component:RegisterUserComponent},
  {path:'user-login', component:LoginComponent},
  {path:'allProducts', component:DisplayAllProductsComponent},
  {path:'sortProducts', component:SortProductsComponent},
  {path:'filterProducts',component:FilterProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'searchProduct',component:SearchproductComponent},
  {path:'viewcart', component:CartComponent},
  {path:'viewwishlist', component:WishlistComponent},
  {path:'myOrders', component:GetorderdetailsComponent},
  {path:'retailerhome', component:RetailerhomeComponent},
  {path:'retailerSignUp',component:RetailersignupComponent},
  {path:'retailerSignIn',component:ReatailersigninComponent},
  {path:'addproduct',component:RetailerAddProductComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
