import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEventsComponent } from './report-events.component';

describe('ReportEventsComponent', () => {
  let component: ReportEventsComponent;
  let fixture: ComponentFixture<ReportEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
