import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderComponent } from './header/header.component';
import { ApproutingModule } from './approuting/approuting.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewbookedticketsComponent } from './viewbookedtickets/viewbookedtickets.component';
import { UserbookticketComponent } from './userbookticket/userbookticket.component';




@NgModule({
  declarations: [
    
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HeaderComponent,
    HomeComponent,
    AdminloginComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    ViewusersComponent,
    ViewbookedticketsComponent,
    UserbookticketComponent
  ],
  imports: [
  
    BrowserModule,
    HttpClientModule,
    ApproutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
