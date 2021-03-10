import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesMenuComponent } from './companies-menu.component';

describe('CompaniesMenuComponent', () => {
  let component: CompaniesMenuComponent;
  let fixture: ComponentFixture<CompaniesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
