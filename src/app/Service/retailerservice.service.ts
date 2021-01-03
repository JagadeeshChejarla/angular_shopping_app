import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProduct } from '../DTO/AddProduct';
import { Login } from '../DTO/Login';
import { RetailerSignUp } from '../DTO/RetailerSignUp';
import { UserSignUp } from '../DTO/UserSignUp';

@Injectable({
  providedIn: 'root'
})
export class RetailerserviceService {
  private _url = 'http://localhost:8080/';



  constructor(private _http : HttpClient) { }
  addNewRetailer(retailerSignUp:RetailerSignUp){
   return this._http.post(this._url+"addNewRetailer",retailerSignUp,{responseType: 'text'})
  }
  retailerLogin(login:Login){
    return this._http.post(this._url+"retailerLogin",login)
    
  }
 addProduct(product:AddProduct,rId:string){
   return this._http.post(this._url+"addProduct/"+rId,product,{responseType: 'text'});
 }
}
