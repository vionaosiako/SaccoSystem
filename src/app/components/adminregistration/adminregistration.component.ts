import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css'],
  providers: [SignupService]
})
export class AdminregistrationComponent implements OnInit {
  register: any;

  constructor(public signupService: SignupService, private router: Router) { }
  ngOnInit(): void {
    this.register= {first_name:'',last_name:'',username:'',email:'',password:'', password2:''};
  }
  goLogin() {
    this.router.navigate(['/', 'login']);
  }
  registerUser(){
    this.signupService.registerAdmin(this.register).subscribe(
      response=> {
        alert('Admin has been registered successfully!')
        this.goLogin()
      },
      error=> console.log (error)
    );

}
}
