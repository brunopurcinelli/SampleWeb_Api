import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id")?.toString();    
      this.customerService.readById(id).subscribe((customer) => {
        this.customer = customer;
      });
    }
  
    deleteCustomer(): void {
      this.customerService.delete(this.customer.id?.toString()).subscribe(() => {
        this.customerService.showMessage("Cliente deletado com sucesso!");
        this.router.navigate(["/customers"]);
      });
    }
  
    cancel(): void {
      this.router.navigate(["/customers"]);
    }
}
