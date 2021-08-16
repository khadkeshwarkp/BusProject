import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { SeatchartComponent } from './seatchart/seatchart.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaymentComponent } from './payment/payment.component';
import { UserFormComponent } from './userform/userform.component';
import { TicketComponent } from './ticket/ticket.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddroutesComponent } from './addroutes/addroutes.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { RatingComponent } from './rating/rating.component';
import { UpdateComponent } from './update/update.component';
import { UpdaterouteComponent } from './updateroute/updateroute.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { ViewroutesComponent } from './viewroutes/viewroutes.component';
import { BushireComponent } from './bushire/bushire.component';
import { BushirepaymentComponent } from './bushirepayment/bushirepayment.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { DatePipe } from '@angular/common';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    BusdetailsComponent,
    SeatchartComponent,
    PaymentComponent,
    UserFormComponent,
    TicketComponent,
    FooterComponent,
    HeaderComponent,
    AddroutesComponent,
    AdminloginComponent,
    BookingsComponent,
    CreateComponent,
    ProfileComponent,
    RatingComponent,
    UpdateComponent,
    UpdaterouteComponent,
    UserdetailsComponent,
    ViewBusComponent,
    ViewroutesComponent,
    BushireComponent,
    BushirepaymentComponent,
    ThankyoupageComponent,
    UserprofileComponent,
    CancelbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule, ModalModule.forRoot(),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
