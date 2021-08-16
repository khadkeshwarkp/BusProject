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
  create(product: any){
    return this.httpClient.post(this.ApiUrl + '/users',product).subscribe(res => {
    },
        err => console.log(err));     
  } 
  getById(id: any): Observable<User> {
    return this.httpClient.get<User>(this.ApiUrl + '/users/' + id);
   
  }
  getlastuserid(): Observable<number> {
    return this.httpClient.get<number>(this.ApiUrl + '/users/getlastuserid')
  }
  // update(id:any, product:any): Observable<Users> {
  //   return this.httpClient.put<Users>(this.ApiUrl + '/user/' + id, JSON.stringify(product), this.httpOptions)
    
  // }


  verifyuser(email :string, pwd:string): Observable<User>{
    return this.httpClient.get<User>(this.ApiUrl + '/users/verifyuser?email=' + email + '&&pwd=' + pwd)
  }

  updateuser(id:any,user:User) {
    this.httpClient.put<User>(this.ApiUrl + '/users/' + id,user).subscribe(res => {
    },
        err => console.log(err)); 
  }
  delete(id:any){
    return this.httpClient.delete<User>(this.ApiUrl + '/users/' + id, this.httpOptions)
    
    
  }

}

  

