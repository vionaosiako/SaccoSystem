import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';


@Component({
  selector: 'app-memberregistration',
  templateUrl: './memberregistration.component.html',
  styleUrls: ['./memberregistration.component.css'],
  providers: [SignupService]
})
export class MemberregistrationComponent implements OnInit {
  register: any;
  constructor(public signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
    this.register= {firstname:'',lastname:'',username:'',email:'',password:'', password2:''};
  }
  goLogin() {
    this.router.navigate(['/', 'login']);
  }
  registerUser(){
    this.signupService.registerUser(this.register).subscribe(
      response=> {
        alert('Member has been registered successfully!')
        this.goLogin()
      },
      error=> console.log (error)
    );

  }
}
