import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  val:boolean= false;

  admin:string="admin";



  ReactiveLogin=new FormGroup({
    email: new FormControl('',[Validators.required]),
    pwd: new FormControl('',[Validators.required])
},)
  
  constructor(private router: Router) { }

  ngOnInit(): void {


  }
Check()
{
  if(this.ReactiveLogin.value.email=="admin" && this.ReactiveLogin.value.pwd=="admin")
  {
    console.log('hi');
    this.router.navigate(['viewbus']);
  }
  else
  {
    alert('Invalid Credentials')
  }
}
}
