import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ApiAboutService} from '../api-about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  rmargarita: any[]=[];
  constructor(private _api:ApiAboutService) { }

  ngOnInit(): void {
    let ob=this._api.getMargarita();
    ob.subscribe((res:any)=>{
     this.rmargarita=res.drinks;
    });
  }

}
