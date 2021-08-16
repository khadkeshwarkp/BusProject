import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { Seat } from '../models/seat';
import { Schedule } from '../models/schedule';
import { Routes } from '../models/routes';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from '../models/bus';
import { SeatchartService } from '../services/seatchart.service';
import { Subscription } from 'rxjs';
import { Booking } from '../models/booking';
import { User } from '../models/user';

@Component({
  selector: 'app-seatchart',
  templateUrl: './seatchart.component.html',
  styleUrls: ['./seatchart.component.css']
})
export class SeatchartComponent implements OnInit ,OnDestroy{

  @Output('closeModal') closeModal = new EventEmitter()
showSeatList:Seat[]=[];
total:number=0;
fillupSeat:string[] = [];
alert=false;
id2?:Number;
seatid1:number = 0;
curruser?:User;
subscription?:Subscription;
  constructor(
    private router:Router,private route:ActivatedRoute ,
    private BusService:SeatchartService
  ) { }
    data:any;
  ngOnInit() {
    this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
    this.route.queryParams.subscribe((params) =>{
      this.data = JSON.parse(params.data);
    })
    this.BusService.getlastbookingid()
    .subscribe((res:Number)=>{
        this.id2 = res;
    })
    this.BusService.getlastseatid()
        .subscribe((res:number)=>{
          
            this.seatid1 = res;
            
        })
    this.getbookSeat();
  }
  logout(){
    localStorage.removeItem("userlogin");
    this.curruser = undefined;
    this.router.navigate(['/homepage'])
  }
  Seat(e:any) {
    console.log("seatchart:")
    console.log(this.data.busId)
    // console.log(this.data);
    let seats=[];
   seats= this.showSeatList.map(iteam=>{
     return iteam.seatNo
   })
    let id = document.getElementById(e);

      if((this.fillupSeat.indexOf(String(e))<0 ) && (this.showSeatList.length!=4)) {
        
        id!.innerHTML = `   <img src="../assets/img/fseat.png" alt="">`
        
        let seat={
          
          seatNo:this.seatid1,
          bookingId:this.id2,
          busId:this.data.busId,
          seatId:e
        }
        this.seatid1 = this.seatid1 + 1;
        this.totalFare(this.data.fareAmount);
        this.showList(seat);
        this.fillupSeat.push(e)
        
      }
      else{
        this.alert=true;
      }
    

  }

  showList(seat:any){
      this.showSeatList.push(seat)
  }

  totalFare(fare:number){
    this.total+=fare;
  }
  
  confirmJourney(){

    let seats=[];
  seats= this.showSeatList.map(iteam=>{
    return iteam.seatNo
  });

  
  
    
  let bookings :Booking={
    bookingId:this.id2,
    scheduleId:this.data.scheduleId,
    numberOfSeats:this.showSeatList.length ,
    fareAmount:this.data.fareAmount,
    totalAmount:this.total,
    bookingStatus:0,
    userId:this.curruser?.userId,
    customerName:"",
    customerContact:"",
    customerEmail:"",
    feedback:"",
    paymentId:1
  }

  localStorage.setItem("bus",JSON.stringify(this.data.bus));
  localStorage.setItem("seats",JSON.stringify(this.showSeatList));
  console.log(this.showSeatList)
  localStorage.setItem("schedule",JSON.stringify(this.data));
  this.router.navigate(['userform'],{ queryParams:{data:JSON.stringify(bookings)}});
  this.closeModal.emit();
  }


  getbookSeat(){
    
    this.subscription=this.BusService.getFilledseats(this.data.busId).subscribe((res:string[])=>{
        for(let i of res){
          console.log(i)
          this.fillupSeat.push(i)
          this.changeSeatColor(i)
        }
    })
  }

  changeSeatColor(seatNo:string){
    // console.log("seatchart:")
    // console.log(seatNo)
    let id= document.getElementById(seatNo)
    id!.innerHTML=`  <img src="../assets/img/bookseat.png">`
    id!.removeEventListener("click",this.Seat);
  }

  ngOnDestroy(){
    this.subscription!.unsubscribe();
  }

} 