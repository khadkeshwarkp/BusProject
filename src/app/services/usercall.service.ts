import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { Users} from '../Models/users'

@Injectable({
  providedIn: 'root'
})
export class UsercallService {
  private ApiUrl="http://localhost:41142/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient)
   {

   }
   getAll(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.ApiUrl + '/user/')
    
  }
  create(product: any): Observable<Users> {
    return this.httpClient.post<Users>(this.ApiUrl + '/user/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(id: any): Observable<Users> {
    return this.httpClient.get<Users>(this.ApiUrl + '/user/' + id)
   
  }

  // update(id:any, product:any): Observable<Users> {
  //   return this.httpClient.put<Users>(this.ApiUrl + '/user/' + id, JSON.stringify(product), this.httpOptions)
    
  // }
  delete(id:any){
    return this.httpClient.delete<Users>(this.ApiUrl + '/user/' + id, this.httpOptions)
    
    
  }

}

  

