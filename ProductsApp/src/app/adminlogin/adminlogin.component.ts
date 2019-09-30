import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  loginUserData = {email:'', password:''}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {

    localStorage.removeItem('usernav')
    localStorage.removeItem('adminnav')
    
  }

  loginUser () {
    if(this.loginUserData.email == 'admin@mail.com' && this.loginUserData.password == '12345678'){
      localStorage.setItem('admin','true')
      this._router.navigate(['/admindashboard'])      
    }
  }
}
