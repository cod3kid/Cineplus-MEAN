import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model'
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
users:User[];
  constructor(public  productsService:ProductsService,private router:Router) { }

  ngOnInit() {

    this.displayusers();
  }

  displayusers()
 {
  this.productsService.getUsers().subscribe((data)=>{
    this.users=JSON.parse(JSON.stringify(data));
  });
 }

 onDeleteuser(id)
  {
    console.log("hello");

    this.productsService.deleteUsers(id).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      this.ngOnInit();

    });
  }

  onUpdateuser(id)
  {
    this.productsService.updateUsers(id);
  }


}
