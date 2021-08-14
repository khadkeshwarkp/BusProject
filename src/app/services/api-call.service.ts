import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Bus } from '../models/bus';

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
  delete(id:any){
    return this.httpClient.delete<Bus>(this.ApiUrl + '/buses/' + id, this.httpOptions)
    
     
  }

}


 