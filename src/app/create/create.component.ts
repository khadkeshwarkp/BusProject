import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService} from '../services/api-call.service'
import { Bus } from '../models/bus';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  busForm!: FormGroup;
  product!: Bus;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public service: ApiCallService,
    
  ){ }
  ngOnInit() {
      this.busForm = this.fb.group({   
      busId:[],
      busPlateNumber:[],
      busType:[],
      capacity:[],
      routeId:[],
      currentCount:[],   
    })
  }

  submitForm() {
    this.product=this.busForm.value
    console.log(this.product)
    this.service.create(this.busForm.value).subscribe(res => {
      console.log(res)
      console.log('Bus is Added!')
     this.router.navigateByUrl('/viewbus')
    });
  }
}
