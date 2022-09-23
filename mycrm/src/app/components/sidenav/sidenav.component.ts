import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveService } from 'src/app/services/active.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router, private activeservice: ActiveService) { }

  ngOnInit(): void {
  }
  changeStatusCustomers(): void {
    this.activeservice.changeToCustomers()
  }
  changeStatusContacts(): void {
    this.activeservice.changeToContacts()
  }
}
