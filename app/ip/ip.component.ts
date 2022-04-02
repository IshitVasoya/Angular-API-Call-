import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ApiipService} from '../api-ip.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class ipComponent implements OnInit {

  address: any;
  constructor(private _api:ApiipService) { }

  ngOnInit(): void {
    let ob=this._api.getAddress();
    ob.subscribe((res:any)=>{
     this.address=res;
    });
  }

}
