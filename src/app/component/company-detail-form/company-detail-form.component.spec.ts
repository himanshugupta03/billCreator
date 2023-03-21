import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailFormComponent } from './company-detail-form.component';

describe('CompanyDetailFormComponent', () => {
  let component: CompanyDetailFormComponent;
  let fixture: ComponentFixture<CompanyDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
