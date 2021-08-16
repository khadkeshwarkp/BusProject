import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Bus } from '../models/bus';
import { Seat } from '../models/seat';

@Injectable({
  providedIn: 'root'
})

export class ApiCallService {
  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient)
   {
   }
   getallseatsbyid(id:number): Observable<Seat[]> {
    return this.httpClient.get<Seat[]>(this.ApiUrl + '/seats/getallseatsbyid?id=' + id)
    
  }
  getAll(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(this.ApiUrl + '/buses/')
    
  }
  create(product: any): Observable<Bus> {
    return this.httpClient.post<Bus>(this.ApiUrl + '/buses/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(id: any): Observable<Bus> {
    return this.httpClient.get<Bus>(this.ApiUrl + '/buses/' + id)
   
  }
  
 update(id:any, product:any): Observable<Bus> {
    return this.httpClient.put<Bus>(this.ApiUrl + '/buses/' + id,  JSON.stringify(product), this.httpOptions)
    
  }
  deleteseat(id:any){
    console.log(id)
    this.httpClient.delete<Seat>(this.ApiUrl + '/seats/' + id , this.httpOptions).subscribe();
    
     
  }

  delete(id:any){
    this.httpClient.delete<Bus>(this.ApiUrl + '/buses/' + id, this.httpOptions).subscribe();
    
     
  }

}


 