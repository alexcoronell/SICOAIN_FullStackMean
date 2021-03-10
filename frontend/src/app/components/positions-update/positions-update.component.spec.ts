import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsUpdateComponent } from './positions-update.component';

describe('PositionsUpdateComponent', () => {
  let component: PositionsUpdateComponent;
  let fixture: ComponentFixture<PositionsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
