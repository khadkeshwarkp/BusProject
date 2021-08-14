import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { Seat } from '../models/seat';
import { User } from '../models/user';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  bookings?:Booking
  user?:User
  seats?:Seat[];
  constructor(public bookingService:BookingService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.bookings = JSON.parse(params.data);
      
    })
    console.log(this.bookings?.numberOfSeats);
    this.seats = JSON.parse(localStorage.getItem("seats")!)
    
    
  }
  donepayment(){
    console.log(this.bookings)
    this.bookings!.bookingStatus = 1;
    this.bookingService.PostBooking(this.bookings!);
     this.seats?.forEach((value) => {
      this.bookingService.PostSeat(value)
    });
    
    this.router.navigate(['ticket'],{ queryParams:{data:JSON.stringify(this.bookings)}})
  }
  
}
