import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

import { Router } from '@angular/router';
import { Iproduct } from 'Products/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public  productsService:ProductsService,private router:Router) { }

  ngOnInit() {
    
    console.log(this.productsService.getProducts());
    this.display();
  }

  public products:Iproduct[];
 display()
 {
  this.productsService.getProducts().subscribe((data)=>{
    console.log(data);
        this.products=JSON.parse(JSON.stringify(data));
  });

  
 }

  
}
