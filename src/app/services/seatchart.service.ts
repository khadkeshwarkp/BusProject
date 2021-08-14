import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeatchartService {
  private ApiUrl = "http://localhost:51917/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getlastbookingid(): Observable<Number> {
    return this.httpClient.get<Number>(this.ApiUrl + '/bookings/getlastbookingid')
  }
  getFilledseats(id:Number): Observable<string[]> {
    return this.httpClient.get<string[]>(this.ApiUrl + '/seats/getFilledseats?id=' + id)
  }
  getlastseatid(): Observable<number> {
    return this.httpClient.get<number>(this.ApiUrl + '/seats/getlastseatid')
  }
}
