import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { AddCustomerService } from 'src/app/services/add-customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  @Input() id?: string;
  customer: Customer = {
    first: '',
    last: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  };
  constructor(
    private ac: AddCustomerService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.ac.getCustomerId(this.id).subscribe((customerData: Customer) => {
        this.customer = customerData;
      });
    }
  }
  onClose() {
    this.activeModal.close();
  }
}
