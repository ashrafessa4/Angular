import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { AddCustomerService } from 'src/app/services/add-customer.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css'],
})
export class ShowCustomerComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer = {
    first: '',
    last: '',
    phone: '',
    email: '',
  };
  constructor(private ac: AddCustomerService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.ac.getCustomer().subscribe((customersData: Customer[]) => {
      this.customers = customersData;
    });
  }

  customerFirstName: string = '';
  customerLastName: string = '';
  customerPhone: string = '';


  deleteCustomer(customer: Customer): void {
    if (confirm('Are you sure?')) {
      this.ac
        .deleteCustomer(customer)
        .then(() => alert('Customer deleted successfully'))
        .catch((err) => {
          console.log(err);
        });
    }
  }

  updateCustomer(customer: Customer): void {
    const modalRef = this.modal.open(UpdateCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }

  addCustomer(): void {
    const modalRef = this.modal.open(CustomerDetailsComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = this.customer.id;
  }
  viewCustomer(customer: Customer): void {
    const modalRef = this.modal.open(ViewCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }
  
}
