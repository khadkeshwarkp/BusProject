import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Booking } from '../models/booking';
import { User } from '../models/user';
import { Seat } from '../models/seat';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("I promise to return after one second!");
      }, 1000);
    });
  }
  async Postdata(bookings:Booking,seats:any) {
    console.log( bookings)
    this.httpClient.post(this.ApiUrl + '/bookings',bookings).subscribe(res => {

      
  },
      err => console.log(err)); 

    this.waitForOneSecond().then((value) => {
      seats?.forEach((value:any) => {
        console.log( value)
          this.httpClient.post(this.ApiUrl + '/seats',value).subscribe(res => {
        },
            err => console.log(err)); 
      });
    });
      
  }
  updatefeedback(id:any,bookings:Booking) {
    this.httpClient.put<Booking>(this.ApiUrl + '/bookings/' + id,bookings).subscribe(res => {
    },
        err => console.log(err)); 
  }
  postbooking(bookings:Booking) {
    this.httpClient.post(this.ApiUrl + '/bookings',bookings).subscribe(res => {
    },
        err => console.log(err));  
  }


}
