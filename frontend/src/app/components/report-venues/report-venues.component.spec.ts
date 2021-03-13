import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVenuesComponent } from './report-venues.component';

describe('ReportVenuesComponent', () => {
  let component: ReportVenuesComponent;
  let fixture: ComponentFixture<ReportVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportVenuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
