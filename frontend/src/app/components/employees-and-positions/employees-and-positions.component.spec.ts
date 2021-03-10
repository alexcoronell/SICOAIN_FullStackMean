import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAndPositionsComponent } from './employees-and-positions.component';

describe('EmployeesAndPositionsComponent', () => {
  let component: EmployeesAndPositionsComponent;
  let fixture: ComponentFixture<EmployeesAndPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesAndPositionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesAndPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
