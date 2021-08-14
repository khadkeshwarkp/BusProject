import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Routes } from '../models/routes';

@Injectable({
  providedIn: 'root'
})

export class RouteCallService {
  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient)
   {
   }
 
  getAll(): Observable<Routes[]> {
    return this.httpClient.get<Routes[]>(this.ApiUrl + '/routes/')
    
  }
  create(product: any): Observable<Routes> {
    return this.httpClient.post<Routes>(this.ApiUrl + '/routes/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(RouteId: any): Observable<Routes> {
    return this.httpClient.get<Routes>(this.ApiUrl + '/routes/' + RouteId)
   
  }

  update(id:any, product:any): Observable<Routes> {
    return this.httpClient.put<Routes>(this.ApiUrl + '/routes/' + id,  JSON.stringify(product), this.httpOptions)
    
  }
  delete(id:any){
    return this.httpClient.delete<Routes>(this.ApiUrl + '/routes/' + id, this.httpOptions)
    
     
  }

}
