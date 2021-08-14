import { Component, OnInit } from '@angular/core';
import { Bus } from '../models/bus';
import { Routes } from '../models/routes';
import { ApiCallService } from '../services/api-call.service';
import { RouteCallService } from '../services/route-call.service';

@Component({
  selector: 'app-viewroutes',
  templateUrl: './viewroutes.component.html',
  styleUrls: ['./viewroutes.component.css']
})
export class ViewroutesComponent implements OnInit {
  routes:Routes[]=[];

  constructor(public service:RouteCallService) { }

  
  ngOnInit(): void {
    this.service.getAll().subscribe((data: Routes[])=>
    {
      console.log(data)
      this.routes = data;
  })  
  }

  

  delete(RoutesId:any)
{
  this.service.delete(RoutesId).subscribe();
  console.log("Deleted Successfully");
  alert("Deleted");
  
}
}
