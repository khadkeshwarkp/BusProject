import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService} from '../services/api-call.service'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { Bus } from '../models/bus';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  busForm=new FormGroup({
    busId:new FormControl(''),
    busNumber:new FormControl(''),
    busPlateNumber:new FormControl(''),
    busType:new FormControl(''),
    capacity:new FormControl(''),
    currentCount:new FormControl(''),
    routeId:new FormControl(''),

   

  })
 
  constructor(private service:ApiCallService,private route:ActivatedRoute,private router:Router) { }
  


 ngOnInit(): void {
    
                        
    console.log();
    this.service.getById(this.route.snapshot.params['busId']).subscribe((data)=>
    this.busForm=new FormGroup({
      busId:new FormControl(data["busId"]),
      busNumber:new FormControl(data["busNumber"]),
      busPlateNumber:new FormControl(data["busPlateNumber"]),
      busType:new FormControl(data["busType"]),
      capacity:new FormControl(data["capacity"]),
      currentCount:new FormControl(data["currentCount"]),
      routeId: new FormControl(data['routeId'])
    })
  )
  }

  submitForm(){
    console.log(this.busForm.value)
    this.service.update(this.route.snapshot.params['busId'],this.busForm.value).subscribe((data)=>
      console.log(data,"Bus details Updated Successfully")),
      this.router.navigateByUrl('/viewbus')
    
  }

}
