import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { ProductListComponent } from '../product-list/product-list.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { HomeComponent } from '../home/home.component';
import {AdminloginComponent } from '../adminlogin/adminlogin.component';
import {LoginComponent } from '../login/login.component';
import {SignupComponent } from '../signup/signup.component';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { ViewusersComponent } from '../viewusers/viewusers.component';
import { ViewbookedticketsComponent } from '../viewbookedtickets/viewbookedtickets.component';
import { UserbookticketComponent } from '../userbookticket/userbookticket.component';


const routes:Routes=[{
  path:"",component:HomeComponent
},
{
  path:"adminlogin", component:AdminloginComponent
},
{
  path:"signup", component:SignupComponent
},
{
  path:"login", component:LoginComponent
}, 
{
  path:"product-list", component:ProductListComponent
},
{
  path:"add",component:AddProductComponent
},
{
  path:"update",component:AddProductComponent
},
{
  path:"userdashboard",component:UserdashboardComponent
},
{
  path:"admindashboard",component:AdmindashboardComponent
},
{
  path:"viewusers",component:ViewusersComponent
},
{
  path:"viewbookedtickets",component:ViewbookedticketsComponent
},
{
  path:"userbookticket",component:UserbookticketComponent
} 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class ApproutingModule { }
