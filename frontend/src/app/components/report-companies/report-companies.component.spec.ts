import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCompaniesComponent } from './report-companies.component';

describe('ReportCompaniesComponent', () => {
  let component: ReportCompaniesComponent;
  let fixture: ComponentFixture<ReportCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
