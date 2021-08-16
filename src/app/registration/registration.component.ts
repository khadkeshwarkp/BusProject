import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UsercallService } from '../services/usercall.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User={
        userId:1,
        fullName : "sdf",
        emailAddress :"sfd",
        contactNo:"ssfd",
        gender:"m",
        address:"",
        dob : new Date('01-04-2021'),
        userpassword:"sdf",
        accountStatus:1,
        deposit:0
  };
  userid1:number = 0;
  ReactiveLogin=new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern("[^@]+@[^@]+.[a-zA-Z]{2,6}")]),
    contact: new FormControl('',[Validators.required,Validators.minLength(10)]),
    pwd: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]+$")]),
    cwd: new FormControl('',[Validators.required])
  },)

  constructor(private router:Router,private route:ActivatedRoute,private usercallservice:UsercallService) { }
  
  ngOnInit(): void {
    this.usercallservice.getlastuserid()
        .subscribe((res:number)=>{
          
            this.userid1 = res;
            
        })
      
  }

  get name()
  {
    return this.ReactiveLogin.get('name');
  }
  get email()
  {
    return this.ReactiveLogin.get('email');
  }
  get contact()
  {
    return this.ReactiveLogin.get('contact');
  }
  get pwd()
  {
    return this.ReactiveLogin.get('pwd');
  }
  get cwd()
  {
    return this.ReactiveLogin.get('cwd');
  }
  Check()
  {

    if(this.ReactiveLogin.value.pwd != this.ReactiveLogin.value.cwd)
    {
      alert("Password and confirm password must be the same ");
    }
    else{
      console.log(this.ReactiveLogin.value);
      this.usercallservice.getlastuserid();
      console.log(this.userid1);
        this.user.userId= this.userid1;
        this.user.fullName = this.ReactiveLogin.value.name;
        this.user.emailAddress =this.ReactiveLogin.value.email;
        this.user.contactNo=this.ReactiveLogin.value.contact;
        this.user.gender="m";
        this.user.address="";
        this.user.dob = new Date('01-04-2021');
        this.user.userpassword=this.ReactiveLogin.value.pwd;
        this.user.accountStatus=1;
        this.user.deposit=0;
      
      this.usercallservice.create(this.user);
      console.log(this.user);
      this.router.navigate(["/login"]);
    }
    
  }
}
