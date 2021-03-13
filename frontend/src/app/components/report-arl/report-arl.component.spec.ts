import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportArlComponent } from './report-arl.component';

describe('ReportArlComponent', () => {
  let component: ReportArlComponent;
  let fixture: ComponentFixture<ReportArlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportArlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportArlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
