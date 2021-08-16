import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Booking } from '../models/booking';
import { BookingService } from '../services/booking.service';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from '../models/schedule';
import { Seat } from '../models/seat';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserFormComponent implements OnInit {
  bookings?:Booking;
  schedules:any
  seats?:any;
  constructor(
    private router:Router,private route:ActivatedRoute
  ) { }
    curruser? :User;
  ngOnInit() {
    this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
    this.route.queryParams.subscribe((params) =>{
      this.bookings = JSON.parse(params.data);
      
    })
    console.log("bookings userform:" + this.bookings)
    this.schedules = JSON.parse(localStorage.getItem("schedule")!)
    console.log(this.schedules)
    
    this.seats = JSON.parse(localStorage.getItem("seats")!)

  }
  logout(){
    localStorage.removeItem("userlogin");
    this.curruser = undefined;
    this.router.navigate(['/homepage'])
  }
  userForm(form: NgForm) {
    this.bookings!.customerName = form.value.user_name;
    this.bookings!.customerContact = form.value.user_mobile;
    this.bookings!.customerEmail = form.value.user_email;
    
    this.router.navigate(['payment'],{ queryParams:{data:JSON.stringify(this.bookings)}})
  }

}