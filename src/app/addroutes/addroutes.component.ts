import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteCallService } from '../services/route-call.service';

@Component({
  selector: 'app-addroutes',
  templateUrl: './addroutes.component.html',
  styleUrls: ['./addroutes.component.css']
})
export class AddroutesComponent implements OnInit {

  routeForm!: FormGroup;
  product!: Routes;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public service: RouteCallService
  ){ }
  ngOnInit() {
      this.routeForm = this.fb.group({   
      routeId:[],
      startingPoint:[],
      destination:[],
    })
  }

  submitForm() {
    this.product=this.routeForm.value
    console.log(this.product)
    this.service.create(this.routeForm.value).subscribe(res => {
      console.log(res)
      console.log('Route is Added!')
     this.router.navigateByUrl('/viewroutes')
    });
  }
}

