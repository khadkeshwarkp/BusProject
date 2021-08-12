import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService} from '../services/api-call.service'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { Bus } from '../Models/bus';
import { Routes } from '../Models/routes';
import { RouteCallService } from '../services/route-call.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateroute',
  templateUrl: './updateroute.component.html',
  styleUrls: ['./updateroute.component.css']
})
export class UpdaterouteComponent implements OnInit {
  routeForm=new FormGroup({
  routeId:new FormControl(''),
  startingPoint:new FormControl(''),
  destination:new FormControl(''),
  })
  constructor(private service:RouteCallService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    console.log();
    this.service.getById(this.route.snapshot.params['routeId']).subscribe((data)=>
    this.routeForm=new FormGroup({
      routeId:new FormControl(data["routeId"]),
      startingPoint:new FormControl(data["startingPoint"]),
      destination:new FormControl(data["destination"]),
    })
  )
  }

  submitForm(){
    console.log(this.routeForm.value)
    this.service.update(this.route.snapshot.params['routeId'],this.routeForm.value).subscribe((data)=>
      console.log(data,"Route details Updated Successfully")),
      this.router.navigateByUrl('/viewroutes')
    
  }

}
  



