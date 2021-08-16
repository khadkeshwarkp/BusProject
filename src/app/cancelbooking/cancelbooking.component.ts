import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { Seat } from '../models/seat';
import { ApiCallService } from '../services/api-call.service';
import { BookingApiService } from '../services/booking-api.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {
  booking:Booking[]=[];
    constructor(public service:BookingApiService,private router :Router,private route :ActivatedRoute,public service2 :ApiCallService) { }
    id:any;
    ngOnInit(): void {
      this.id= (JSON.parse(localStorage.getItem("userlogin")!)).userId
      this.service.getallbyid(this.id).subscribe((data:Booking[])=>{
        console.log("cancelbooking")
        this.booking=data;
        console.log(this.id)
      })
    }
    waitForOneSecond(bookingId:any) {
      return new Promise(resolve => {
        this.service2.getallseatsbyid(bookingId).subscribe((data:Seat[])=>{
          console.log("seats:")
          console.log(data)
          data.forEach((i :Seat) => {
            // console.log(i.seatNo)
            this.service2.deleteseat(i.seatNo)
            console.log("deleted the seats")
          })
        })
        
        setTimeout(() => {
          resolve("I promise to return after one second!");
        }, 1000);
      });
    }
    delete(bookingId:any)
    {
      
      this.waitForOneSecond(bookingId).then(s => {
        console.log("deleting booking")
        this.service.delete(bookingId).subscribe();
        console.log("Deleted Successfully");

      })
      
      



    }
  
  }