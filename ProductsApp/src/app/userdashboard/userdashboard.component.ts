import { Component, OnInit } from '@angular/core';
import { Ibooktickets } from '../booktickets.model';
import { Iproduct } from 'Products/product.model';

import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../products.service';
import * as $ from "jquery";
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

 monthname= ['January','February','March','April','May','June','July','August','September','October','November','December']
  
 username:String='';
  btItem= new Ibooktickets(null,null,null,null,null,null);
  public products:Iproduct[];

   user = localStorage.getItem('user')

   yoyo=this.user;
   
  constructor(public prodServie: ProductsService,
    public route:ActivatedRoute,
  public routes:Router,private _user:UserService) {

  
   }

  

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this.routes.navigate(['/login'])},
      error=>console.error(error)
    )
  }
  
 
  ngOnInit() {

   
    
    
    this.display();
   
  }

  display()
 {
  this.prodServie.getProducts().subscribe((data)=>{
    this.products=JSON.parse(JSON.stringify(data));
  });
 }



 submitMethod2()
 {

  console.log("add");
  this.prodServie.bookUserTickets(this.btItem).subscribe((data)=>{
  alert(JSON.parse(JSON.stringify(data)).msg);

  });
  console.log(this.btItem);

 }
}
