import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { CustomerComponent } from "./views/customer/customer.component";
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';


const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
  path: "customers",
  component: CustomerComponent
},
{
  path: "customers/create",
  component: CustomerCreateComponent
},
{
  path: "customers/edit/:id",
  component: CustomerEditComponent
},
{
  path: "customers/delete/:id",
  component: CustomerDeleteComponent
},
{
  path: "customers/table",
  component: CustomerTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
