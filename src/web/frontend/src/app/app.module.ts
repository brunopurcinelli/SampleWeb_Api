import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CustomerComponent } from './views/customer/customer.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';

import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerReadComponent } from './components/customer/customer-read/customer-read.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { SuccessDirective } from './directives/success.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CustomerComponent,
    RedDirective,
    ForDirective,
    CustomerCreateComponent,
    CustomerDeleteComponent,
    CustomerEditComponent,
    CustomerReadComponent,
    CustomerTableComponent,
    SuccessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,    
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,    
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
