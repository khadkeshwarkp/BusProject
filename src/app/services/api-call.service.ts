import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Bus } from '../Models/bus';

@Injectable({
  providedIn: 'root'
})

export class ApiCallService {
  private ApiUrl="http://localhost:41142/api";
  httpOptions = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient)
   {
   }
 
  getAll(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(this.ApiUrl + '/Bus/')
    
  }
  create(product: any): Observable<Bus> {
    return this.httpClient.post<Bus>(this.ApiUrl + '/Bus/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(id: any): Observable<Bus> {
    return this.httpClient.get<Bus>(this.ApiUrl + '/Bus/' + id)
   
  }
  
 update(id:any, product:any): Observable<Bus> {
    return this.httpClient.put<Bus>(this.ApiUrl + '/Bus/' + id,  JSON.stringify(product), this.httpOptions)
    
  }
  delete(id:any){
    return this.httpClient.delete<Bus>(this.ApiUrl + '/Bus/' + id, this.httpOptions)
    
     
  }

}


 