import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  // user : userDetails = new userDetails
  constructor(private loginserivce: LoginService,
    private route: Router,
  ) { }

  user: any;
  ngOnInit(): void {

  }
  login(loginForm: NgForm): void {
    console.log('calling');
    var body = {
      email: loginForm.value.email,
      password: loginForm.value.password,
    }

    this.loginserivce.login(body).subscribe((data: any) => {    
      this.user = data.response
      this.route.navigate(['home'])
      console.log(data);
    })
  }
}
