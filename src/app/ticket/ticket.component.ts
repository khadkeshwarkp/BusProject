import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  bookings?:Booking
  constructor(private router:Router,private route:ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.bookings = JSON.parse(params.data);
      
    })
   
  }

}
