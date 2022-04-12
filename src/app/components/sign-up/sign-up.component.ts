import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { SignUpService } from 'src/app/services/signUp/sign-up.service';

// N


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private route: Router,
    private signUp: SignUpService) { }
 
  onSubmit(signUpForm: NgForm) {
    console.log(signUpForm.value)
    this.signUp.signUp(signUpForm.value).subscribe(data => {
      console.log(data);
      this.route.navigate(['home'])
    })

  }
  ngOnInit(): void {
  }

}
