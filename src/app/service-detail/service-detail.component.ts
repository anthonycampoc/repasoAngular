import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { servicio, servicioList } from '../servicio/servicio.mock';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  servicio?: servicio ;
  serviciolist: servicio[] = servicioList;
  loading: boolean = true;
  color? : string = '';
  constructor(private _route: ActivatedRoute){}
  
  ngOnInit(): void {

    setTimeout(() => {
      this._route.params.subscribe(params =>{
        // console.log(params['servicioID']);
         this.servicio = this.serviciolist.find(servicio => servicio.id == params['servicioID'])
         this.color = this.servicio?.price as number < 60 ? 'red': '';
         this.loading = false;
       })
    }, 1500);
   
  }

}
