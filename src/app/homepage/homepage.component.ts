import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Schedule } from '../schedule';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ScheduleForm = new FormGroup({
    viewdate:new FormControl(''),
    source:new FormControl(''),
    destination:new FormControl(''),
    
  })
  constructor(public service: ApiserviceService) { }

  ngOnInit(): void {
    
  }
  submitDetails(){
    
    this.service.Getschedules(this.ScheduleForm.get('source')!.value,this.ScheduleForm.get('destination')!.value,this.ScheduleForm.get('viewdate')!.value).subscribe((schedules:Schedule[]) =>{
      console.log(schedules);
    })
  }
}
