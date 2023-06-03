import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainbarComponent } from './components/mainbar/mainbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminregistrationComponent } from './components/adminregistration/adminregistration.component';
import { MemberregistrationComponent } from './components/memberregistration/memberregistration.component';
import { LoginComponent } from './components/login/login.component';
import { MembersdetailComponent } from './components/membersdetail/membersdetail.component';
import { DataTablesModule } from 'angular-datatables';
import { ContributionsMerrygoroundComponent } from './components/contributions-merrygoround/contributions-merrygoround.component';
import { ContributionsMonthlysavingsComponent } from './components/contributions-monthlysavings/contributions-monthlysavings.component';
import { LoansComponent } from './components/loans/loans.component';
import { MessageComponent } from './components/message/message.component';
import { LoanRequestComponent } from './components/loan-request/loan-request.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainbarComponent,
    FooterComponent,
    AdminregistrationComponent,
    MemberregistrationComponent,
    LoginComponent,
    MembersdetailComponent,
    ContributionsMerrygoroundComponent,
    ContributionsMonthlysavingsComponent,
    LoansComponent,
    MessageComponent,
    LoanRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
