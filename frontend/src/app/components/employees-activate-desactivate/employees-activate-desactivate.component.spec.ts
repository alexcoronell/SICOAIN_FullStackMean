import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesActivateDesactivateComponent } from './employees-activate-desactivate.component';

describe('EmployeesActivateDesactivateComponent', () => {
  let component: EmployeesActivateDesactivateComponent;
  let fixture: ComponentFixture<EmployeesActivateDesactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesActivateDesactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesActivateDesactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
