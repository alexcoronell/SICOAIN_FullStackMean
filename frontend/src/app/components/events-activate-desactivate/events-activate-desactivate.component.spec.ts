import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsActivateDesactivateComponent } from './events-activate-desactivate.component';

describe('EventsActivateDesactivateComponent', () => {
  let component: EventsActivateDesactivateComponent;
  let fixture: ComponentFixture<EventsActivateDesactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsActivateDesactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsActivateDesactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
