import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")?.toString();    
    this.customerService.readById(id).subscribe((customer) => {
      this.customer = customer;
    });
  }

  updateCustomer(): void {
    this.customerService.update(this.customer).subscribe(() => {
      this.customerService.showMessage("Cliente atualizado com sucesso!");
      this.router.navigate(["/customers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/customers"]);
  }
}
