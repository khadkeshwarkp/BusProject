import { Component, OnInit } from '@angular/core';
import { Users } from '../Models/users';
import { UsercallService } from '../services/usercall.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user:Users[]=[];
  constructor(public service :UsercallService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data:Users[])=>{
      console.log(data)
      this.user=data;
    })
  }
delete(userId:any)
{
  this.service.delete(userId).subscribe();
}
}
