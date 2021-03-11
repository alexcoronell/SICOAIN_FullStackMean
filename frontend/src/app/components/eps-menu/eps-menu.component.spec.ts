import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsMenuComponent } from './eps-menu.component';

describe('EpsMenuComponent', () => {
  let component: EpsMenuComponent;
  let fixture: ComponentFixture<EpsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
