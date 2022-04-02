import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiAboutService {

  constructor(private _http: HttpClient) { }

  getMargarita(){
    return this._http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
  }
}