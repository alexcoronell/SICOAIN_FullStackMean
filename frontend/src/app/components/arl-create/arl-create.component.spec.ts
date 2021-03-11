import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArlCreateComponent } from './arl-create.component';

describe('ArlCreateComponent', () => {
  let component: ArlCreateComponent;
  let fixture: ComponentFixture<ArlCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArlCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArlCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
