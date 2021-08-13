import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { ViewroutesComponent } from './viewroutes/viewroutes.component';
import { AddroutesComponent } from './addroutes/addroutes.component';
import { RatingComponent } from './rating/rating.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { UpdaterouteComponent } from './updateroute/updateroute.component';
import { RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';




@NgModule({
  declarations: [
    AppComponent,
    ViewBusComponent,
    AddbusComponent,
    ViewroutesComponent,
    AddroutesComponent,
    RatingComponent,
    UserdetailsComponent,
    ProfileComponent,
    AdminloginComponent,
    UpdateComponent,
    CreateComponent,
    UpdaterouteComponent,
    BookingsComponent 
    
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }