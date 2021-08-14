import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UsercallService {
  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient)
   {

   }
   getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.ApiUrl + '/users/')
    
  }
  create(product: any): Observable<User> {
    return this.httpClient.post<User>(this.ApiUrl + '/users/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(id: any): Observable<User> {
    return this.httpClient.get<User>(this.ApiUrl + '/users/' + id)
   
  }

  // update(id:any, product:any): Observable<Users> {
  //   return this.httpClient.put<Users>(this.ApiUrl + '/user/' + id, JSON.stringify(product), this.httpOptions)
    
  // }
  delete(id:any){
    return this.httpClient.delete<User>(this.ApiUrl + '/users/' + id, this.httpOptions)
    
    
  }

}

  

