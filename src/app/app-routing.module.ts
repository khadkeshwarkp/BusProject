import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { SeatchartComponent } from './seatchart/seatchart.component';
import { UserFormComponent } from './userform/userform.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';



import { ViewBusComponent } from './view-bus/view-bus.component';
import { ViewroutesComponent } from './viewroutes/viewroutes.component';
import { AddroutesComponent } from './addroutes/addroutes.component';
import { RatingComponent } from './rating/rating.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { UpdaterouteComponent } from './updateroute/updateroute.component';
import { BookingsComponent } from './bookings/bookings.component';


const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'registration' , component : RegistrationComponent},
  {path : 'homepage' , component : HomepageComponent},
  {path : 'busdetails' , component : BusdetailsComponent},
  {path : 'seatchart' , component : SeatchartComponent},
  {path : 'userform' , component : UserFormComponent},
  {path : 'payment' , component : PaymentComponent},
  {path : 'ticket' , component : TicketComponent},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },


  {path:'viewbus', component: ViewBusComponent},
  {path:'viewroutes',component:ViewroutesComponent},
  {path:'addroutes',component:AddroutesComponent},
  {path:'rating',component:RatingComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'update/:busId',component:UpdateComponent},
  {path:'create',component:CreateComponent},
  {path:'updateroute/:routeId',component:UpdaterouteComponent},
  {path:'bookingdetails',component:BookingsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
