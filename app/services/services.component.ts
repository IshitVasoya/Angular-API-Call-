import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ApiServicesService} from '../api-services.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  details :any
  constructor(private _api:ApiServicesService) { }

  ngOnInit(): void {
    let ob=this._api.getinfo();
    ob.subscribe((res:any)=>{
     this.details=res;
    });
  }

}