import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSort } from '../DTO/ProductSort';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {

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
    let keyword:string= sessionStorage.getItem('searchProducts')!;
    console.log(keyword);
    this._customerService.searchProdcut(keyword).subscribe((data:any)=>{
      console.log(data);
      this.products=data;
    })
  }
  addToCart(proId:number){
    sessionStorage.setItem("proId",proId.toString());
    let uId:string= sessionStorage.getItem('userId')!;
  if (uId != "null")
  {
    this._customerService.addToCart(uId,proId.toString()).subscribe((data: any)=>{
      console.log(data);

      this._router.navigate(["cart"]);
  
    });
  }
   
  }
 

}
