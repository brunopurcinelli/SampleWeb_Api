import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {

  customers: Customer[] 
  
  displayedColumns = ['id', 'firstName', 'lastName', 'action']

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.read().subscribe(customers => {
      this.customers = customers
      console.log(customers)
    })
  }  

}
