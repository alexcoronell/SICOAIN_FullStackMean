import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesUpdateComponent } from './venues-update.component';

describe('VenuesUpdateComponent', () => {
  let component: VenuesUpdateComponent;
  let fixture: ComponentFixture<VenuesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
