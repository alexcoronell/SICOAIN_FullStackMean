import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEpsComponent } from './report-eps.component';

describe('ReportEpsComponent', () => {
  let component: ReportEpsComponent;
  let fixture: ComponentFixture<ReportEpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
