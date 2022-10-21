import { Component, OnInit } from '@angular/core';
import { ContributionsService } from 'src/app/services/contributions.service';
import 'datatables.net-responsive-dt'

@Component({
  selector: 'app-contributions-monthlysavings',
  templateUrl: './contributions-monthlysavings.component.html',
  styleUrls: ['./contributions-monthlysavings.component.css'],
  providers: [ContributionsService]

})
export class ContributionsMonthlysavingsComponent implements OnInit {

  monthlycontribution:any;

  constructor(private api:ContributionsService) {
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
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
  }

}

