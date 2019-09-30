import { Injectable } from '@angular/core';
import { Iproduct } from 'Products/product.model';
import { User } from '../app/user.model'
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient,public router:Router) { }
  public products:Iproduct[];
  public users:User[];
  getProducts()
  {
      return this.http.get('http://localhost:3001/products');
  }

  getUsers()
  {
      return this.http.get('http://localhost:3001/users');
  }

  getBookedtickets()
  {
    console.log("getBookedtickets")
    return this.http.get('http://localhost:3001/userbookedtickets');

  }

  addProducts(item)
  {
    console.log("addProducts Called");
    console.log(item);

    return this.http.post('http://localhost:3001/insert',{"product":item});
  }
  deleteProducts(id)
  {
    return this.http.get('http://localhost:3001/delete/'+id);
  }


  deleteUsers(id)
  {
    return this.http.get('http://localhost:3001/deleteusers/'+id);
  }

  
  deletebookedticket(id)
  {
    return this.http.get('http://localhost:3001/deletebookedtickets/'+id);
  }




  updateProducts(id)
  {
    this.http.get('http://localhost:3001/update/'+id).subscribe((data)=>{
      console.log(data);
      this.products=JSON.parse(JSON.stringify(data));
      console.log(this.products);

     this.router.navigate(['/update/',this.products]);
    });
  }

  updateUsers(id)
  {
    this.http.get('http://localhost:3001/updateusers/'+id).subscribe((data)=>{
      console.log(data);
      this.users=JSON.parse(JSON.stringify(data));
      console.log(this.users);

     this.router.navigate(['/update/',this.products]);
    });
  }

  editSubmit(item)
  {
    console.log(item);

    return this.http.post('http://localhost:3001/update',{product:item});
  }

  editSubmituser(item)
  {
    console.log(item);

    return this.http.post('http://localhost:3001/update',{user:item});
  }

bookUserTickets(item)
  {
    console.log("bookUserTickets Called");
    console.log(item);

    return this.http.post('http://localhost:3001/insertusertickets',{"ticket":item});
  }

 

}