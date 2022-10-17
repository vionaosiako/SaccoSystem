import { Component, OnInit, OnDestroy, ViewChild,} from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import 'datatables.net-responsive-dt'

import { Router } from '@angular/router';
@Component({
  selector: 'app-membersdetail',
  templateUrl: './membersdetail.component.html',
  styleUrls: ['./membersdetail.component.css'],
  providers: [MembersService]
})
export class MembersdetailComponent implements OnInit{
  dtOptions: any = {};

  
  member: any;

  constructor(private api: MembersService) { 
      this.api.getUser().subscribe(
        (data) => {
          this.member = data;
          setTimeout(()=>{   
            $('#datatableexample').DataTable( {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              lengthMenu : [5, 10, 25],
              responsive: true, // Use this attribute to enable the responsive extension

              
          } 
          );
          }, 1);
                }, error => console.error(error));
    }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
  }

}
