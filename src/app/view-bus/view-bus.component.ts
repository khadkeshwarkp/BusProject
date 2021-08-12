import { Component, OnInit } from '@angular/core';
import { Bus } from '../Models/bus';
import { ApiCallService } from '../services/api-call.service';
@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.css']
})
export class ViewBusComponent implements OnInit {
  bus:Bus[]=[];

  constructor(public service:ApiCallService) { }
 

  ngOnInit(): void {
    this.service.getAll().subscribe((data: Bus[])=>{
      console.log(data)
      this.bus = data;
  })  
  }


  delete(BusId:any)
{
  this.service.delete(BusId).subscribe();
  console.log("Deleted Successfully");
  alert("Deleted");
  
}
}
