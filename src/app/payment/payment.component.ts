import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  bushiredata?:any
  user?:User
  seats?:Seat[];
  
  curruser?:User;
  constructor(public bookingService:BookingService,private router:Router,private route:ActivatedRoute ) { }


  ReactiveLogin=new FormGroup({
    uname: new FormControl('',[Validators.required]),
    cardnumber: new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
    mm:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(2)]),
    yy:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(2)]),
    cvv:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{3}$")]),
  },)
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.bushiredata = JSON.parse(params.bushiredata);
      
    })
    console.log("ing payment")
    console.log(this.bushiredata)
    this.route.queryParams.subscribe((params) =>{
      this.bookings = JSON.parse(params.data);
      
    })
    console.log(this.bookings?.numberOfSeats);
    this.seats = JSON.parse(localStorage.getItem("seats")!)
    
    this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
  }
  get uname()
  {
  return this.ReactiveLogin.get('uname');
  }
  get cardnumber()
  {
  return this.ReactiveLogin.get('cardnumber');
  }
  get mm()
  {
  return this.ReactiveLogin.get('mm');
  }
  get yy()
  {
  return this.ReactiveLogin.get('yy');
  }
  get cvv()
  {
  return this.ReactiveLogin.get('cvv');
  }

  logout(){
    localStorage.removeItem("userlogin");
    this.curruser = undefined;
    this.router.navigate(['/homepage'])
  }
  donepayment(){
    this.bookings!.bookingStatus = 1;
    this.bookingService.Postdata(this.bookings!,this.seats);
    
    
    this.router.navigate(['ticket'],{ queryParams:{data:JSON.stringify(this.bookings)}})
  }
  
}
