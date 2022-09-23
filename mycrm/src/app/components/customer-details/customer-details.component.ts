import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { AddCustomerService } from 'src/app/services/add-customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer = {
    first: '',
    last: '',
    phone: '',
    email: '',
  };
  constructor(private cs: AddCustomerService, private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  onSubmit() {
    this.cs
      .addCustomer(this.customer)
      .then(() => {
        alert('Customer was added successfully');
        this.activeModal.close();
      })
      .catch((err) => console.log(err));
  }

}
