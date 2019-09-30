import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'Products/product.model';
import {ProductsService} from '../products.service';
import {AddProductComponent} from '../add-product/add-product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[AddProductComponent]
})
export class ProductListComponent implements OnInit {


  constructor(public  productsService:ProductsService, public addProduct:AddProductComponent,private router:Router) {

  }

  ngOnInit() {
    console.log(this.productsService.getProducts());
    this.display();

  }
 public products:Iproduct[];
 display()
 {
  this.productsService.getProducts().subscribe((data)=>{
    this.products=JSON.parse(JSON.stringify(data));
  });
 }
  pageTitle:String = "Product List";

  flag:Boolean=false;
  toggleImage()
  {
    console.log('clicked');

    this.flag=!this.flag;
  }
  onDelete(id)
  {
    console.log("hello");

    this.productsService.deleteProducts(id).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      this.ngOnInit();

    });
  }
  onUpdate(id)
  {
    //alert("hai");
    this.productsService.updateProducts(id);
  }

}
