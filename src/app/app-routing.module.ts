import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { AddbusComponent } from './addbus/addbus.component';
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
  {path:'viewbus', component: ViewBusComponent},
  {path: 'addbus', component: AddbusComponent},
  { path: '',   redirectTo: '/admin', pathMatch: 'full' },
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
  
  // {path:'updateuser/:userId',component:UpdateUserComponent}

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }