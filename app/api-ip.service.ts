import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiipService {

  constructor(private _http: HttpClient) { }

  getAddress(){
    return this._http.get("https://freegeoip.app/json/");
  }
}