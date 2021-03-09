import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersActivateDesactivateComponent } from './users-activate-desactivate.component';

describe('UsersActivateDesactivateComponent', () => {
  let component: UsersActivateDesactivateComponent;
  let fixture: ComponentFixture<UsersActivateDesactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersActivateDesactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersActivateDesactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
