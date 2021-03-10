import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAndPositionsMenuComponent } from './employees-and-positions-menu.component';

describe('EmployeesAndPositionsMenuComponent', () => {
  let component: EmployeesAndPositionsMenuComponent;
  let fixture: ComponentFixture<EmployeesAndPositionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesAndPositionsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesAndPositionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
