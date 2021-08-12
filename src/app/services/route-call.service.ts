import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Routes } from '../Models/routes';

@Injectable({
  providedIn: 'root'
})

export class RouteCallService {
  private routeUrl="http://localhost:41142/api";
  httpOptions = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient)
   {
   }
 
  getAll(): Observable<Routes[]> {
    return this.httpClient.get<Routes[]>(this.routeUrl + '/Routes/')
    
  }
  create(product: any): Observable<Routes> {
    return this.httpClient.post<Routes>(this.routeUrl + '/Routes/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(RouteId: any): Observable<Routes> {
    return this.httpClient.get<Routes>(this.routeUrl + '/Routes/' + RouteId)
   
  }

  update(id:any, product:any): Observable<Routes> {
    return this.httpClient.put<Routes>(this.routeUrl + '/Routes/' + id,  JSON.stringify(product), this.httpOptions)
    
  }
  delete(id:any){
    return this.httpClient.delete<Routes>(this.routeUrl + '/Routes/' + id, this.httpOptions)
    
     
  }

}
