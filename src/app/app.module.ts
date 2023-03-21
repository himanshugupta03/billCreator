import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceFormComponent } from './component/invoice-form/invoice-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { InvoiceDataTableComponent } from './component/invoice-data-table/invoice-data-table.component';
import { NgxPrintModule } from 'ngx-print';
import { HomeComponent } from './component/home/home.component';
import { CompanyDetailFormComponent } from './component/company-detail-form/company-detail-form.component';
import { CompanyDetailComponent } from './component/company-detail/company-detail.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    InvoiceFormComponent,
    InvoiceComponent,
    InvoiceDataTableComponent,
    HomeComponent,
    CompanyDetailFormComponent,
    CompanyDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxPrintModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
