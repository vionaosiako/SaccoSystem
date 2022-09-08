import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SignupService]
})

export class LoginComponent implements OnInit {
  login: any;

  constructor(public authService: SignupService, private router: Router) { }
  goDashboard() {
    this.router.navigate(['/', 'home']);
  }

  ngOnInit(): void {
    this.login= {username:'', password:''};
  }
  loginUser(){
    this.authService.login(this.login).subscribe(
      response=> {
        alert('Login successfull!')
        this.goDashboard()
      },
      error=>{
        alert('You have entered an invalid username or password!')
      }
    );
  }
}