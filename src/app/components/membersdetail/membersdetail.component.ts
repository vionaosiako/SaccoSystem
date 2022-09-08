import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-membersdetail',
  templateUrl: './membersdetail.component.html',
  styleUrls: ['./membersdetail.component.css'],
  providers: [MembersService]
})
export class MembersdetailComponent implements OnInit {

  member:any;
  constructor(public membersService: MembersService, private router: Router) { }

  ngOnInit(): void {
    this.member =  {firstname:'',lastname:'',username:'',email:''};
  }

}
