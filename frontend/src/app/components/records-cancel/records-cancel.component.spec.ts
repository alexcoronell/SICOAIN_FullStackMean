import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsCancelComponent } from './records-cancel.component';

describe('RecordsCancelComponent', () => {
  let component: RecordsCancelComponent;
  let fixture: ComponentFixture<RecordsCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
