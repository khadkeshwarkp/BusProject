import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Schedule } from '../models/schedule';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  Getschedules(source:string,destination:string,viewdate:Date): Observable<any> {
    return this.httpClient.get<any>(this.ApiUrl + '/schedules/schedulesgetbyid?from1=' + source + '&&to=' + destination + '&&viewdate=' + viewdate)
  }
}
