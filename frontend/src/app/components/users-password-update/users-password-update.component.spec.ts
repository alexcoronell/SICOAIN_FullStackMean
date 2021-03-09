import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPasswordUpdateComponent } from './users-password-update.component';

describe('UsersPasswordUpdateComponent', () => {
  let component: UsersPasswordUpdateComponent;
  let fixture: ComponentFixture<UsersPasswordUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPasswordUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPasswordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
