import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router,
              private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: '',
      routeUrl: '/customers'
    }
  }

  ngOnInit(): void {
  }

  navigateToCustomerCreate(): void{
    this.router.navigate(['/customers/create']);
  }
}
