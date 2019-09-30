import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Iproduct } from 'Products/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  constructor(public prodServie: ProductsService,
    public route:ActivatedRoute,
  public routes:Router) { }
  productItem= new Iproduct(null,null,null,null,null);

  flagUpdate:boolean;
  btn_name:string;
  ngOnInit() {
    this.flagUpdate=false;
    if(this.route.snapshot.params._id)
    {
     this.productItem=JSON.parse(JSON.stringify(this.route.snapshot.params));
     //this.route.snapshot.params=null;
     console.log(this.productItem);

     this.btn_name="update";
     this.flagUpdate=true;

    }
    else
    {

      this.btn_name="add";
      this.flagUpdate=false;
    }
    console.log(this.submitMethod);
  }

  submitMethod()
  {
    console.log("on Submit Method");
    if(this.flagUpdate==true)
    {
      this.onUpdate();
    }
    else{
      this.onSubmit();
    }
    console.log('redirect');
    
    this.routes.navigate(['/admindashboard']);
  }
  onSubmit()
  {
    console.log("add");
    this.prodServie.addProducts(this.productItem).subscribe((data)=>{
    alert(JSON.parse(JSON.stringify(data)).msg);

    });
    console.log(this.productItem);

  }
  onUpdate()
  {
    console.log("update");
    console.log("entered");

    this.prodServie.editSubmit(this.productItem).subscribe((data)=>{
      console.log("updated");


    });

  }


}
