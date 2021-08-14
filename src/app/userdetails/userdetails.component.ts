import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsercallService } from '../services/usercall.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user:User[]=[];
  constructor(public service :UsercallService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data:User[])=>{
      console.log(data)
      this.user=data;
    })
  }
delete(userId:any)
{
  this.service.delete(userId).subscribe();
}
}
