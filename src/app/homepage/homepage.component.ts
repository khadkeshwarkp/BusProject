import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../services/homepage.service'; 
import { Schedule } from '../models/schedule';
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
  constructor(public service: HomepageService,private router : Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  
  submitDetails(){
    
    this.service.Getschedules(this.ScheduleForm.get('source')!.value,this.ScheduleForm.get('destination')!.value,this.ScheduleForm.get('viewdate')!.value).subscribe((schedules:Schedule[]) =>{
      console.log(schedules)
      this.router.navigate(['./busdetails'],{ queryParams:{data:JSON.stringify(schedules)}})
    })
  }
}
