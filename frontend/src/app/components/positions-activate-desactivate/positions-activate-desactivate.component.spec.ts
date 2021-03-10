import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsActivateDesactivateComponent } from './positions-activate-desactivate.component';

describe('PositionsActivateDesactivateComponent', () => {
  let component: PositionsActivateDesactivateComponent;
  let fixture: ComponentFixture<PositionsActivateDesactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsActivateDesactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsActivateDesactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
