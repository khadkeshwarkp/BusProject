import { Component, OnInit } from '@angular/core';
import { FeedbackApiService } from '../services/feedback-api.service';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
feedback:Booking[]=[];
  constructor(public service:FeedbackApiService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data:Booking[])=>{
      console.log(data)
      this.feedback=data;
    })
  }

}
