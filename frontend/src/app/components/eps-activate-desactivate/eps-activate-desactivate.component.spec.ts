import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsActivateDesactivateComponent } from './eps-activate-desactivate.component';

describe('EpsActivateDesactivateComponent', () => {
  let component: EpsActivateDesactivateComponent;
  let fixture: ComponentFixture<EpsActivateDesactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsActivateDesactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsActivateDesactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
