import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.css']
})
export class ThankyoupageComponent implements OnInit {
  bookings?:any;
  constructor(public bookingService:BookingService,private router:Router,private route:ActivatedRoute ) { }
  feedbackval?:any;
  curruser?:User;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.bookings = JSON.parse(params.bookings);
      
    })
    this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
  }
  logout(){
    localStorage.removeItem("userlogin");
    this.curruser = undefined;
    this.router.navigate(['/homepage'])
  }
  submitfeedback(){
    this.bookings!.feedback = this.feedbackval;
    this.bookingService.updatefeedback(this.bookings?.bookingId,this.bookings!)
  }
}
