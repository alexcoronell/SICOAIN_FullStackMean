import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsUpdateComponent } from './eps-update.component';

describe('EpsUpdateComponent', () => {
  let component: EpsUpdateComponent;
  let fixture: ComponentFixture<EpsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
