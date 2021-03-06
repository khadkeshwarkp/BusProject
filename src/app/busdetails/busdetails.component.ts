import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Schedule } from '../models/schedule';
import { Bus } from '../models/bus';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.css']
})
export class BusdetailsComponent implements OnInit {
  subscription?: Subscription;
  modalRef?: BsModalRef;
   constructor(private router:Router,private route:ActivatedRoute ,private modalService: BsModalService){
  }
  data:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.data = JSON.parse(params.data);
    })
  }
  openModal(template: TemplateRef<any>,sche:any) {
    // this.modalRef = this.modalService.show(template);
    // let journey={
    //   route:this.route,
    //   bus_info:bus,
    //   seats:
    // }
    this.router.navigate(['./seatchart'],{ queryParams:{data:JSON.stringify(sche)}})
  }
  closeModal (){
    this.modalRef?.hide();
  }
  
}
