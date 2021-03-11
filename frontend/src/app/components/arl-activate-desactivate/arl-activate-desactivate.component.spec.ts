import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArlActivateDesactivateComponent } from './arl-activate-desactivate.component';

describe('ArlActivateDesactivateComponent', () => {
  let component: ArlActivateDesactivateComponent;
  let fixture: ComponentFixture<ArlActivateDesactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArlActivateDesactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArlActivateDesactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
