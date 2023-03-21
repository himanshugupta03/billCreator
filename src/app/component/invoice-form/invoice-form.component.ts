import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  constructor(public modelActivate: NgbActiveModal) {}

  ngOnInit(): void {}

  saveDetail(data: any) {
    console.warn(data);
    this.modelActivate.close('Yes');
  }
}
