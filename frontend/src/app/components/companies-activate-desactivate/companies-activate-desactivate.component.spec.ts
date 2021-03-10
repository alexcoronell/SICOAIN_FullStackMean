import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesActivateDesactivateComponent } from './companies-activate-desactivate.component';

describe('CompaniesActivateDesactivateComponent', () => {
  let component: CompaniesActivateDesactivateComponent;
  let fixture: ComponentFixture<CompaniesActivateDesactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesActivateDesactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesActivateDesactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
