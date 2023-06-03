import { Component, OnInit } from '@angular/core';
import { ContributionsService } from 'src/app/services/contributions.service';
import 'datatables.net-responsive-dt'

@Component({
  selector: 'app-contributions-merrygoround',
  templateUrl: './contributions-merrygoround.component.html',
  styleUrls: ['./contributions-merrygoround.component.css'],
  providers: [ContributionsService]
})
export class ContributionsMerrygoroundComponent implements OnInit {

  merrygoround:any;

  constructor(private api:ContributionsService) {
    this.getMerryGoRound()
    // this.merrygoround = {id:-1, receipt_ID: '',reg_Number:'',Amount:''}
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
  }

  getMerryGoRound = () => {
    this.api.getMerryGoRoundContribution().subscribe(
      (data) => {
        this.merrygoround = data;
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

  newMerryGoRound = () => {
    this.api.createMerryGoRound(this.merrygoround).subscribe(
      response=> {
        alert('Record Added Successfully!')
        this.getMerryGoRound()
      },
      error=> console.log (error)
    );
  }

  putMerryGoRound = () => {
    this.api.updateMerryGoRound(this.merrygoround).subscribe(
      response=> {
        alert('Record Updated Successfully!')
        this.getMerryGoRound()
      },
      error => {
        console.log(error);
      }
    );
  }

  merryGoRoundClicked = (merry:any) => {
    this.api.getOneMerryGoRound(merry.id).subscribe(
      data => {
        this.merrygoround = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
