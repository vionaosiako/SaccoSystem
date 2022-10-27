import { Component, OnInit } from '@angular/core';
import { ContributionsService } from 'src/app/services/contributions.service';
import 'datatables.net-responsive-dt'
import { Router } from '@angular/router';


@Component({
  selector: 'app-contributions-monthlysavings',
  templateUrl: './contributions-monthlysavings.component.html',
  styleUrls: ['./contributions-monthlysavings.component.css'],
  providers: [ContributionsService]

})
export class ContributionsMonthlysavingsComponent implements OnInit {

  monthlycontribution:any;

  constructor(public api:ContributionsService) {
    this.getSavings()
    this.monthlycontribution = {id:-1, receipt_ID: '',reg_Number:'',Amount:''}
  }

  ngOnInit(): void {
    this.monthlycontribution = {reg_number:'',Amount: ''}
    this.getSavings();
  }

  getSavings = () => {
    this.api.getMonthlySavingContribution().subscribe(
      (data) => {
        this.monthlycontribution = data;
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

  newMonthlySaving(){
    this.api.createMonthlySavings(this.monthlycontribution).subscribe(
      response=> {
        alert('Record Added Successfully!')
      },
      error=> console.log (error)
    );

}
  newMerryGoRound = () => {
    this.api.createMerryGoRound(this.monthlycontribution).subscribe(
      response=> {
        alert('Record Added Successfully!')
      },
      error=> console.log (error)
    );
  }

  putMonthlySaving = () => {
    this.api.updateMonthlySavings(this.monthlycontribution).subscribe(
      response=> {
        alert('Record Updated Successfully!')
      },
      error => {
        console.log(error);
      }
    );
  }

  putMerryGoRound = () => {
    this.api.updateMerryGoRound(this.monthlycontribution).subscribe(
      response=> {
        alert('Record Updated Successfully!')
      },
      error => {
        console.log(error);
      }
    );
  }

  monthlySavingClicked = (donation:any) => {
    this.api.getOneMonthlySavings(donation.id).subscribe(
      data => {
        this.monthlycontribution = data;
      },
      error => {
        console.log(error);
      }
    );
    // console.log(training.id)
  }
}


