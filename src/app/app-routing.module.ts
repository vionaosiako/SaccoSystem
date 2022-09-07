import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainbarComponent } from './components/mainbar/mainbar.component';
import { AdminregistrationComponent } from './components/adminregistration/adminregistration.component';
import { MemberregistrationComponent } from './components/memberregistration/memberregistration.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: MainbarComponent },
  { path: 'adminregistration', component: AdminregistrationComponent },
  { path: 'memberregistration', component: MemberregistrationComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
