import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Schedule } from './schedule';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  Getschedules(source:string,destination:string,viewdate:Date): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(this.ApiUrl + '/Schedules/schedulesgetbyid?from1=' + source + '&&to=' + destination + '&&viewdate=' + viewdate)
  }
}
