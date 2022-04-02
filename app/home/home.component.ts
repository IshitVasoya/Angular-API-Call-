import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ApiHomeService } from '../api-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faculties: any
  constructor(private _api:ApiHomeService) { }

  ngOnInit(): void {
    console.log("hello word")
    let ob=this._api.getDomian();
    ob.subscribe((res:any)=>{
     this.faculties=res;
    });
  }
}
