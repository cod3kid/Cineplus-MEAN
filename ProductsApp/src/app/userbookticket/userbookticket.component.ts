import { Component, OnInit } from '@angular/core';
import { Ibooktickets } from '../booktickets.model';
import { Iproduct } from 'Products/product.model';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-userbookticket',
  templateUrl: './userbookticket.component.html',
  styleUrls: ['./userbookticket.component.css']
})
export class UserbookticketComponent implements OnInit {
  monthname= ['January','February','March','April','May','June','July','August','September','October','November','December']
  user = localStorage.getItem('user')

yoyo=this.user;
  btItem= new Ibooktickets(this.yoyo,null,null,null,null,null);
  public products:Iproduct[];
  constructor(public prodServie: ProductsService,
    public route:ActivatedRoute,
  public routes:Router,private _user:UserService) { }

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
 

