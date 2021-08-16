
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { Seat } from '../models/seat';
import { User } from '../models/user';
import { ApiCallService } from '../services/api-call.service';
import { BookingApiService } from '../services/booking-api.service';
import { Routes } from '../models/routes';
import { Schedule } from '../models/schedule';
@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {
  booking:Booking[]=[];

  data?:any;
    constructor(public service:BookingApiService,private router :Router,private route :ActivatedRoute,public service2 :ApiCallService) { }
    id:any;
    seats2d:Seat[][] = [];
    schedule?: Schedule;
    routes:Routes[] = [];
    curruser?:User;
    ngOnInit(): void {
      this.schedule = JSON.parse(localStorage.getItem("schedule")!)
      console.log(this.schedule)
      this.id= (JSON.parse(localStorage.getItem("userlogin")!)).userId
      this.service.getallbyid(this.id).subscribe((data:Booking[])=>{
        console.log("cancelbooking")
        this.booking=data;
        

        data.forEach((i :Booking) => {
          // console.log(i.seatNo)
          if(i.bookingId != undefined){
              this.service2.getallseatsbyid(i.bookingId as number).subscribe((data:Seat[])=>{
                console.log("seats:")
                
                  this.seats2d.push(data);
                console.log(this.seats2d)
              })
            }

        })



        data.forEach((i :Booking) => {
          // console.log(i.seatNo)
          if(i.bookingId != undefined){
              this.service2.getroutebyscheduleid(i.scheduleId as number).subscribe((data:Routes)=>{
                
                  this.routes.push(data);
              })
            }

        })


        
      })
      this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
    }
    logout(){
      localStorage.removeItem("userlogin");
      this.curruser = undefined;
      this.router.navigate(['/homepage'])
    }
    waitForOneSecond(bookingId:any) {
      return new Promise(resolve => {
        this.service2.getallseatsbyid(bookingId).subscribe((data:Seat[])=>{
          // console.log("seats:")
          // console.log(data)
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