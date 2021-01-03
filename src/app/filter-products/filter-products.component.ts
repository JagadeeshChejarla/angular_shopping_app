import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSort } from '../DTO/ProductSort';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {
  products : ProductSort[];
  brand:string;
  p1:number;
 p2:number;

  constructor
  (private _customerService : CustomerserviceService,
  private  _route : ActivatedRoute,
  private _router : Router) { }

  ngOnInit(): void {
    let uId:string= sessionStorage.getItem('userId')!;
    if(uId==null){
      alert("Need to login");
      this._router.navigate(["home"]);
    }
  }
onFilterClick(){
this._customerService.filterProduct(this.brand,this.p1,this.p2).subscribe((data:any)=>{
  this.products = data;
  if(data==null){
alert("No results found");
  }

});
}
addToCart(proId:number){
  sessionStorage.setItem("proId",proId.toString());
  let uId:string= sessionStorage.getItem('userId')!;
if (uId != "null")
{
  this._customerService.addToCart(uId,proId.toString()).subscribe((data: any)=>{

    alert(data);
   

  });
}
 
}
addToWishlist(proId:number){
  sessionStorage.setItem("proId",proId.toString());
  let uId:string= sessionStorage.getItem('userId')!;
if (uId != "null")
{
  this._customerService.addToMyWishlist(uId,proId.toString()).subscribe((data: any)=>{

    alert(data);
  

  });
}
 
}
}
