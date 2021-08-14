import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class FeedbackApiService {
  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient){}

  getAll(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(this.ApiUrl + '/bookings/')
    
  }
  create(product: any): Observable<Booking> {
    return this.httpClient.post<Booking>(this.ApiUrl + '/bookings/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(id: any): Observable<Booking> {
    return this.httpClient.get<Booking>(this.ApiUrl + '/bookings/' + id)
   
  }

  update(id:any, product:any): Observable<Booking> {
    return this.httpClient.put<Booking>(this.ApiUrl + '/bookings/' + id, JSON.stringify(product), this.httpOptions)
    
  }
  delete(id:any){
    return this.httpClient.delete<Booking>(this.ApiUrl + '/bookings/' + id, this.httpOptions)
    
    
  }

}
