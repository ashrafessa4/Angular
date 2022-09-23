import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { AddCustomerService } from 'src/app/services/add-customer.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Input() id?:string
  customer: Customer = {
    first: "",
    last: "",
    phone: "",
    email: ""
  }
  costumers: Customer[] = [];

  constructor(private ac: AddCustomerService, private modal: NgbModal) { }
  
  addCustomer():void {
    const modalRef = this.modal.open(CustomerDetailsComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal'
    })
    modalRef.componentInstance.id = this.customer.id;
  }

  ngOnInit(): void {
    this.ac.getCustomer().subscribe((customerData: Customer[]) => {
      this.costumers = customerData;
    });
  }

  customerFirstName: string = '';
  customerLastName: string = '';
  customerPhone: string = '';
}
