import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyDetailFormComponent } from '../company-detail-form/company-detail-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private modalService: NgbModal) {}

  AddCompany() {
    const res = this.modalService.open(CompanyDetailFormComponent, {
      centered: true,
    });
    console.warn(res);
  }
}
