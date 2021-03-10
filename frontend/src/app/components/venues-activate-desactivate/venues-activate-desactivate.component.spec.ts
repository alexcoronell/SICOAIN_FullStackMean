import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesActivateDesactivateComponent } from './venues-activate-desactivate.component';

describe('VenuesActivateDesactivateComponent', () => {
  let component: VenuesActivateDesactivateComponent;
  let fixture: ComponentFixture<VenuesActivateDesactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuesActivateDesactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesActivateDesactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
