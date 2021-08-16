import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { User } from '../models/user';
import { SeatchartService } from '../services/seatchart.service';
@Component({
  selector: 'app-bushire',
  templateUrl: './bushire.component.html',
  styleUrls: ['./bushire.component.css']
})
export class BushireComponent implements OnInit {

  id2:any;
  list:any = ['AC-₹1500/day', 'Non-AC-₹950/day', 'Sleeper-₹700/day', 'Coach-₹500/day']

    constructor(public fb: FormBuilder,private router:Router,private route:ActivatedRoute, private BusService:SeatchartService) { }
    curruser?:User;
  ReactiveLogin=this.fb.group({
      pickup: new FormControl('',[Validators.required]),
      bustype: new FormControl('',[Validators.required]),
      hiredays: new FormControl('',[Validators.required]),
      start: new FormControl('',[Validators.required])
         
    },)
  
  val1 :any;
    changelist(e:any) {
      console.log(e.value)
      this.bustype?.setValue(e.target.value, {
        onlySelf: true
      })
    }
  
    ngOnInit(): void {
      this.BusService.getlastbookingid()
    .subscribe((res:Number)=>{
        this.id2 = res;
    })
    this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
  }
  logout(){
    localStorage.removeItem("userlogin");
    this.curruser = undefined;
    this.router.navigate(['/homepage'])
  }
    get pickup()
    {
      return this.ReactiveLogin.get('pickup');
    }
    get hiredays()
    {
      return this.ReactiveLogin.get('hiredays');
    }
    get start()
    {
      return this.ReactiveLogin.get('start');
    }
    get bustype()
    {
      return this.ReactiveLogin.get('bustype');
    }
    checktype(){
      let check = this.ReactiveLogin.get('bustype') as unknown as string ;
      
      if( check ==  "AC-₹1500/day"){
        return 1500 * this.val1;
      }else if(check ==  "Non-AC-₹950/day"){
        return 950* this.val1;
      }else if(check == "Sleeper-₹700/day"){
        return 700 * this.val1;
      }else{
        return 500 * this.val1;
      }
    }
    checktype1(){
      let check = this.ReactiveLogin.get('bustype') as unknown as string ;
      let val = this.ReactiveLogin.get('hiredays') as unknown as number;
      if( check ==  "AC-₹1500/day"){
        return 1500 ;
      }else if(check ==  "Non-AC-₹950/day"){
        return 950;
      }else if(check == "Sleeper-₹700/day"){
        return 700 ;
      }else{
        return 500;
      }
    }
    submit(){
      let bookings :Booking={
        bookingId:this.id2,
        scheduleId: 1,
        numberOfSeats: 36 ,
        fareAmount:this.checktype1(),
        totalAmount:this.checktype(),
        bookingStatus:0,
        userId:1,
        customerName:"",
        customerContact:"",
        customerEmail:"",
        feedback:"",
        paymentId:1,
        bushire:1
      }
      this.router.navigate(['bushirepayment'],{ queryParams:{bookings:JSON.stringify(bookings)}})
    }
    Check()
    {
      
      console.log(this.ReactiveLogin.value);
    }
  }