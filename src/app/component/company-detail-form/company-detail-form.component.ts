import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-detail-form',
  templateUrl: './company-detail-form.component.html',
  styleUrls: ['./company-detail-form.component.scss'],
})
export class CompanyDetailFormComponent {
  constructor(private modelActivate: NgbActiveModal) {}

  saveDetail(data: any) {
    console.warn(data);
    this.modelActivate.close('Yes');
  }
}
