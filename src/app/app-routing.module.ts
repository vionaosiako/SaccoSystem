import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainbarComponent } from './components/mainbar/mainbar.component';
import { AdminregistrationComponent } from './components/adminregistration/adminregistration.component';
import { MemberregistrationComponent } from './components/memberregistration/memberregistration.component';
import { LoginComponent } from './components/login/login.component';
import { MembersdetailComponent } from './components/membersdetail/membersdetail.component';

const routes: Routes = [
  { path: 'home', component: MainbarComponent },
  { path: 'adminregistration', component: AdminregistrationComponent },
  { path: 'memberregistration', component: MemberregistrationComponent },
  { path: '', component: LoginComponent },
  { path: 'members', component: MembersdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
