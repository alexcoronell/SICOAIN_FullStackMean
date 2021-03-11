import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArlMenuComponent } from './arl-menu.component';

describe('ArlMenuComponent', () => {
  let component: ArlMenuComponent;
  let fixture: ComponentFixture<ArlMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArlMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
