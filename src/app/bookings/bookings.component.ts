import { Component, OnInit } from '@angular/core';
import { BookingApiService } from '../services/booking-api.service';
import { Booking } from '../Models/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  booking:Booking[]=[];
    constructor(public service:BookingApiService) { }
  
    ngOnInit(): void {
      this.service.getAll().subscribe((data:Booking[])=>{
        console.log(data)
        this.booking=data;
      })
    }
  
  }
  
