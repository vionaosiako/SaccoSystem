import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainbarComponent } from './components/mainbar/mainbar.component';
import { AdminregistrationComponent } from './components/adminregistration/adminregistration.component';
import { MemberregistrationComponent } from './components/memberregistration/memberregistration.component';
import { LoginComponent } from './components/login/login.component';
import { MembersdetailComponent } from './components/membersdetail/membersdetail.component';
import { ContributionsMerrygoroundComponent } from './components/contributions-merrygoround/contributions-merrygoround.component';
import { ContributionsMonthlysavingsComponent } from './components/contributions-monthlysavings/contributions-monthlysavings.component';
import { MessageComponent } from './components/message/message.component';
const routes: Routes = [
  { path: 'home', component: MainbarComponent },
  { path: 'adminregistration', component: AdminregistrationComponent },
  { path: 'memberregistration', component: MemberregistrationComponent },
  { path: '', component: LoginComponent },
  { path: 'members', component: MembersdetailComponent},
  { path: 'merrygoroundcontribution', component: ContributionsMerrygoroundComponent},
  { path: 'monthlysavingscontribution', component: ContributionsMonthlysavingsComponent},
  { path: 'message', component: MessageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
