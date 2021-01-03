import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../DTO/Product';
import { ProductSort } from '../DTO/ProductSort';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-sort-products',
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.css']
})
export class SortProductsComponent implements OnInit {
 
 order : number = 1;
 products : ProductSort [];

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
  onPriceClick(){
    this._customerService.sortProduct('price',this.order).subscribe((data: any)=>{
      this.products = data;
  console.log(this.products);

    
    });
   }
   onNameClick(){
    this._customerService.sortProduct('name',this.order).subscribe((data: any)=>{
      this.products = data;
  console.log(this.products);

    }
    );
   }
   onBrandClick(){
    this._customerService.sortProduct('brand',this.order).subscribe((data:  any)=>{
      this.products = data;
  console.log(this.products);

    }
    );
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
}
