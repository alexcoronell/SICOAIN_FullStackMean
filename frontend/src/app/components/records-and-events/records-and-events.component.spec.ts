import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsAndEventsComponent } from './records-and-events.component';

describe('RecordsAndEventsComponent', () => {
  let component: RecordsAndEventsComponent;
  let fixture: ComponentFixture<RecordsAndEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsAndEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
