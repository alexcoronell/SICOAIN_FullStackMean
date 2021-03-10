import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesCreateComponent } from './venues-create.component';

describe('VenuesCreateComponent', () => {
  let component: VenuesCreateComponent;
  let fixture: ComponentFixture<VenuesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
