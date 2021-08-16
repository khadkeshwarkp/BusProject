import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { Seat } from '../models/seat';
import { User } from '../models/user';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-bushirepayment',
  templateUrl: './bushirepayment.component.html',
  styleUrls: ['./bushirepayment.component.css']
})
export class BushirepaymentComponent implements OnInit {
  bookings?:Booking
  bushiredata?:any
  user?:User;
  curruser?:User
  seats?:Seat[];
  constructor(public bookingService:BookingService,private router:Router,private route:ActivatedRoute ) { }

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
  donepayment(){
    console.log(this.bookings)
    this.bookingService.postbooking(this.bookings!)
    this.router.navigate(['thankyoupage'],{ queryParams:{bookings:JSON.stringify(this.bookings)}})
  }
  
}
