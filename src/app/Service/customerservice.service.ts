import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignUp } from '../DTO/UserSignUp';
import { Login } from '../DTO/Login';
import { Observable } from 'rxjs';
import { Product } from '../DTO/Product';
import { ProductSort } from '../DTO/ProductSort';
import { Cart } from '../DTO/Cart';
import { Wishlist } from '../DTO/wishlist';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  private _url = 'http://localhost:8080/';



  constructor(private _http : HttpClient) { }
  login(login : Login)
  {
    return this._http.post(this._url+"userLogin",login);
  }
  ddNewUser(newUser:UserSignUp): Observable<UserSignUp> {
    return this._http.post<UserSignUp>(this._url+"userRegistration",newUser);
}
getAllProducts(): Observable <Product []> {
  return this._http.get<Product []>(this._url+"/getAllProductsForUser");

}
  getProductBySearch(keyword: string) : Observable<ProductSort[]>
  {

    return this._http.get<ProductSort[]>(this._url+"getProductBySearch/"+keyword);
  }

  sortProduct(by :string, order : number) : Observable<Product[]>
  {
    return this._http.get<Product[]>(this._url+"sortProduct/"+by+"/"+order);
  }

  filterProduct(brand:string,s:number,e:number){
    return this._http.get(this._url+"filterProduct/"+brand+"/"+s+"/"+e);
  }
  addToCart(uId:string,pId:string){
    return this._http.get(this._url+"addToMyCart/"+uId+"/"+pId,{responseType: 'text'});
  }
  searchProdcut(keyword:string){
    return this._http.get(this._url+"getProductBySearch/"+keyword);
  }
 
  getMyCarts(uId:string){
    return this._http.get(this._url+"getMyCart/"+uId);
  }
  deleteCart(cId:string){
    return this._http.delete(this._url+"deleteToMyCart/"+cId,{responseType: 'text'});
  }
  updateCart(cId: string,addOrMinus:string){
    return this._http.get(this._url+"updateMyCart/"+cId+"/"+addOrMinus,{responseType: 'text'});
  }
  placeOrder(carts: Cart[],pType:string){
    return this._http.post(this._url+"placeOrder/"+pType,carts,{responseType: 'text'});

  }
  getMyWishlist(uId : string) : Observable<Wishlist[]> 
  {
  
    return this._http.get<Wishlist[]>(this._url+"getMyWishlist/"+uId);
  }
  

deleteMyWishlist(wId: string)
  {
   
    return this._http.delete(this._url+wId,{responseType:'text'});
  }
  

 addToMyWishlist(uId: string, pId: string)
  {

    return this._http.get(this._url+"addToMyWishlist/"+uId+"/"+pId,{responseType:'text'});
  }
  getMyOrderDetails(uId:string){
    return this._http.get(this._url+"getMyPlacedOrders/"+uId);
  }

}
