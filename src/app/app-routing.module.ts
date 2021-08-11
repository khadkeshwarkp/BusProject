import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'registration' , component : RegistrationComponent},
  {path : 'homepage' , component : HomepageComponent},
  {path : 'busdetails' , component : BusdetailsComponent},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
