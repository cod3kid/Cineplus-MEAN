import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res.user);
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', res.user.username)
        localStorage.setItem('userId', res.user._id)
        this._router.navigate(['/userdashboard'])
      },
      err => console.log(err)
    ) 
  }

}
