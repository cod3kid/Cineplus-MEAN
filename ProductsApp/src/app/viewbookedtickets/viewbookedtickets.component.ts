import { Component, OnInit } from '@angular/core';
import { Ibooktickets } from '../booktickets.model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbookedtickets',
  templateUrl: './viewbookedtickets.component.html',
  styleUrls: ['./viewbookedtickets.component.css']
})
export class ViewbookedticketsComponent implements OnInit {

  constructor(public  productsService:ProductsService , private router:Router) { }
bookedtickets:Ibooktickets[];
  ngOnInit() {

    this.displaybookedtickets();
  }

  displaybookedtickets()
  {
    console.log("displaybookedtickets")
    this.productsService.getBookedtickets().subscribe((data)=>{
      this.bookedtickets=JSON.parse(JSON.stringify(data));
      console.log(this.bookedtickets)
    });
  }

  onDeletebookedticket(id)
  {
    console.log("hello");

    this.productsService.deletebookedticket(id).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      this.ngOnInit();

    });
  }



}
