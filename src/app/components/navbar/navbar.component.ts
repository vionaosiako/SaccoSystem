import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: SignupService, private router: Router) {
    this.router.navigate(['/', '']);
  }

  ngOnInit(): void {
  }
}
