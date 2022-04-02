import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiHomeService {

  constructor(private _http: HttpClient) { }

  getDomian(){
    return this._http.get("https://www.boredapi.com/api/activity");
  }
}
