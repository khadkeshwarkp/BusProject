import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UsercallService } from '../services/usercall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={
    userId:2,
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
    email: new FormControl('',[Validators.required,Validators.pattern("[^@]+@[^@]+.[a-zA-Z]{2,6}")]),
    pwd: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]+$")])
},)

constructor(private router:Router,private route:ActivatedRoute,private usercallservice:UsercallService) { }

ngOnInit(): void {
this.usercallservice.getlastuserid()
    .subscribe((res:number)=>{
      
        this.userid1 = res;
        
    })
  
}


get email()
{
return this.ReactiveLogin.get('email');
}
get pwd()
{
return this.ReactiveLogin.get('pwd');
}

Check()
{

  
    this.usercallservice.verifyuser(this.ReactiveLogin.value.email, this.ReactiveLogin.value.pwd)
        .subscribe((res:User)=>{
          
            this.user!.userId= res.userId;
            this.user!.fullName = res.fullName;
            this.user!.emailAddress = res.emailAddress;
            this.user!.contactNo= res.contactNo;
            this.user!.gender=res.gender;
            this.user!.address=res.address;
            this.user!.dob = res.dob;
            this.user!.userpassword=res.userpassword;
            this.user!.accountStatus = 1;
            this.user!.deposit = 0;
            console.log(this.user)
            localStorage.setItem("userlogin",JSON.stringify(this.user));
            this.router.navigate(["/homepage"]);
        })
        // console.log(this.user)
    
   
  }
}
