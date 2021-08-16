import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { Schedule } from '../models/schedule';
import { Seat } from '../models/seat';
import { User } from '../models/user';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  bookings?:Booking
  feedbackval?:any;
  curruser?:User;
  schedules?:any
  seats:Seat[] = []
  constructor(private router:Router,private route:ActivatedRoute ,private bookingservice:BookingService) { }
  from?:string;
  to?:string;
  ngOnInit(): void {
    this.from = JSON.parse(localStorage.getItem("from")!)
    this.to = JSON.parse(localStorage.getItem("to")!)
    this.schedules = JSON.parse(localStorage.getItem("schedule")!)
    this.seats = JSON.parse(localStorage.getItem("seats")!)
    this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
    this.route.queryParams.subscribe((params) =>{
      this.bookings = JSON.parse(params.data);
      
    })
  }
    logout(){
      localStorage.removeItem("userlogin");
      this.curruser = undefined;
      this.router.navigate(['/homepage'])
    }
  submitfeedback(){
    this.bookings!.feedback = this.feedbackval;
    this.bookingservice.updatefeedback(this.bookings?.bookingId,this.bookings!)
  }
}
