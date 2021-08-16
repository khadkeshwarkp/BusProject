
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from '../models/user';
import { UsercallService } from '../services/usercall.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  curruser?:User;
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
    name: new FormControl(''),
    email: new FormControl(''),
     gender: new FormControl(''),
    contact: new FormControl(''),
    dob: new FormControl(''),
    address:new FormControl('')
  },)
  passwordgroup=new FormGroup({
    oldpassword: new FormControl(''),
    newpassword: new FormControl(''),
    confirmpassword: new FormControl('')
  },)

  constructor(private usercallservice:UsercallService,public route:Router,private router : ActivatedRoute,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.curruser = JSON.parse(localStorage.getItem("userlogin")!)
    
    this.usercallservice.getById(this.router.snapshot.params['userId']).subscribe((data)=>{
        this.ReactiveLogin=new FormGroup({
          name:new FormControl(data["fullName"]),
          email:new FormControl(data["emailAddress"]),
          gender:new FormControl(data["gender"]),
          contact:new FormControl(data["contactNo"]),
          dob: new FormControl(this.datepipe.transform(data["dob"], 'yyyy-MM-dd')),
          address:new FormControl(data["address"]),
          
        },)
        this.passwordgroup=new FormGroup({
          oldpassword:new FormControl(data["userpassword"]),
          newpassword:new FormControl(),
          confirmpassword:new FormControl(),
          
        },)
        
      }
    )
    this.usercallservice.getlastuserid()
        .subscribe((res:number)=>{
          
            this.userid1 = res;
            
        });
        
  }

  
  get name()
  {
    return this.ReactiveLogin.get('name');
  }
  get email()
  {
    return this.ReactiveLogin.get('email');
  }
  get gender()
  {
    return this.ReactiveLogin.get('gender');
  }
  get contact()
  {
    return this.ReactiveLogin.get('contact');
  }
  get dob()
  {
    return this.ReactiveLogin.get('dob');
  }
  get currpwd()
  {
    return this.ReactiveLogin.get('currpwd');
  }
  get npwd()
  {
    return this.ReactiveLogin.get('npwd');
  }
  get cwd()
  {
    return this.ReactiveLogin.get('cwd');
  }

  updatepassword(){
    if(this.ReactiveLogin.value.pwd != this.ReactiveLogin.value.cwd)
    {
      alert("Password and confirm password must be the same ");
    }
    else{

        this.user.userId= this.curruser?.userId;
        this.user.fullName = this.ReactiveLogin.value.name;
        this.user.emailAddress =this.ReactiveLogin.value.email;
        this.user.contactNo= this.ReactiveLogin.value.contact;
        this.user.gender=this.ReactiveLogin.value.gender;
        this.user.address=this.ReactiveLogin.value.address;
        this.user.dob = this.ReactiveLogin.value.dob;
        this.user.userpassword=this.passwordgroup.value.newpassword;
        this.user.accountStatus = 1;
        this.user.deposit = 0;
      
      this.usercallservice.updateuser(this.curruser?.userId,this.user);
      this.route.navigate(["/homepage"]);
    }
  }
  Check()
  {
        this.user.userId= this.curruser?.userId;
        this.user.fullName = this.ReactiveLogin.value.name;
        this.user.emailAddress =this.ReactiveLogin.value.email;
        this.user.contactNo= this.ReactiveLogin.value.contact;
        this.user.gender=this.ReactiveLogin.value.gender;
        this.user.address=this.ReactiveLogin.value.address;
        this.user.dob = this.ReactiveLogin.value.dob;
        this.user.userpassword=this.passwordgroup.value.oldpassword;
        this.user.accountStatus = 1;
        this.user.deposit = 0;
        console.log(this.user)
      this.usercallservice.updateuser(this.curruser?.userId,this.user);
      localStorage.setItem("userlogin",JSON.stringify(this.user));
      this.route.navigate(["/homepage"]);
  
}

}