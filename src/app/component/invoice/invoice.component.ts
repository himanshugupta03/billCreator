import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceFormComponent } from '../invoice-form/invoice-form.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const res = this.modalService.open(InvoiceFormComponent, {
      centered: true,
    });
    console.warn(res);
  }
}
