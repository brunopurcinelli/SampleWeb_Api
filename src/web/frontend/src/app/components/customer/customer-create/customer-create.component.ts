import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  
  customer: Customer = {
    firstName: '',
    lastName:''
  }

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
     
  }

  createNewCustomer(): void{
    this.customerService.create(this.customer).subscribe(() => {
      this.customerService.showMessage('Cliente criado com Sucesso');
      this.router.navigate(['/customers']);  
    });   
  }

  cancel(): void{
    this.router.navigate(['/customers']);
  }
}
