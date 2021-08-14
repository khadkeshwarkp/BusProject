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
  
  PostBooking(bookings:Booking) {
    console.log( bookings)
    this.httpClient.post(this.ApiUrl + '/bookings',bookings).subscribe(res => {
  },
      err => console.log(err)); 
  }

  PostSeat(seats:Seat) {
    console.log( seats)
    this.httpClient.post(this.ApiUrl + '/seats',seats).subscribe(res => {
    },
        err => console.log(err)); 
  }
}
