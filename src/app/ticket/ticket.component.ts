import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
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
  constructor(private router:Router,private route:ActivatedRoute ,private bookingservice:BookingService) { }
  
  ngOnInit(): void {
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
