import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { AddCustomerService } from 'src/app/services/add-customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  @Input() id?: string;
  customer: Customer = { first: '', last: '', phone: '', email: '' };
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

  updateCustomer(): void {
    this.ac
      .editCustomer(this.customer)
      .then(() => {
        this.activeModal.close();
        alert('Book updated successfully');
      })
      .catch((err) => console.log(err));
  }
}
