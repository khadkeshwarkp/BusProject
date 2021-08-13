import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Booking } from '../Models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingApiService {
  private ApiUrl="http://localhost:41142/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient){}

  getAll(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(this.ApiUrl + '/booking/')
    
  }
  create(product: any): Observable<Booking> {
    return this.httpClient.post<Booking>(this.ApiUrl + '/booking/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(id: any): Observable<Booking> {
    return this.httpClient.get<Booking>(this.ApiUrl + '/booking/' + id)
   
  }
    update(id:any, product:any): Observable<Booking> {
    return this.httpClient.put<Booking>(this.ApiUrl + '/booking/' + id, JSON.stringify(product), this.httpOptions)
    
  }
  delete(id:any){
    return this.httpClient.delete<Booking>(this.ApiUrl + '/booking/' + id, this.httpOptions)
    
    
  }

}
