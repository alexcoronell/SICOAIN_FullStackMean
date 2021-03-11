import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsAndEventsMenuComponent } from './records-and-events-menu.component';

describe('RecordsAndEventsMenuComponent', () => {
  let component: RecordsAndEventsMenuComponent;
  let fixture: ComponentFixture<RecordsAndEventsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsAndEventsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsAndEventsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
