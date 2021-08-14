import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class SchedulecallService {

  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient)
   {
   }
   getAll(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(this.ApiUrl + '/schedules/')
    
  }
  create(product: any): Observable<Schedule> {
    return this.httpClient.post<Schedule>(this.ApiUrl + '/schedules/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(id: any): Observable<Schedule> {
    return this.httpClient.get<Schedule>(this.ApiUrl + '/schedules/' + id)
   
  }

  update(id:any, product:any): Observable<Schedule> {
    return this.httpClient.put<Schedule>(this.ApiUrl + '/schedules/' + id,  JSON.stringify(product), this.httpOptions)
    
  }
  delete(id:any){
    return this.httpClient.delete<Schedule>(this.ApiUrl + '/schedules/' + id, this.httpOptions)
    
     
  }

}
 

 

