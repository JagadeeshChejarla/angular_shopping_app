import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProduct } from '../DTO/AddProduct';
import { RetailerserviceService } from '../Service/retailerservice.service';

@Component({
  selector: 'app-retailer-add-product',
  templateUrl: './retailer-add-product.component.html',
  styleUrls: ['./retailer-add-product.component.css']
})
export class RetailerAddProductComponent implements OnInit {
product: AddProduct;
constructor
( private _retailerService : RetailerserviceService,
private _router : Router) {
this.product = new AddProduct();
 }


  ngOnInit(): void {
  }

  addProduct(){
    let rId:string= sessionStorage.getItem('retailerId')!;
    this._retailerService.addProduct(this.product,rId).subscribe((data : any)=>{
      console.log(data);
       alert(data);
       if(data==null){
         alert("Something went wrong");
       }
    })
  }
}
