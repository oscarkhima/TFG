import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrderFalseComponent } from './dialog-order-false.component';

describe('DialogOrderFalseComponent', () => {
  let component: DialogOrderFalseComponent;
  let fixture: ComponentFixture<DialogOrderFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOrderFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOrderFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
