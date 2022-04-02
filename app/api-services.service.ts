import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private _http: HttpClient) { }

  getinfo(){
    return this._http.get("https://freegeoip.app/json/");
  }
}