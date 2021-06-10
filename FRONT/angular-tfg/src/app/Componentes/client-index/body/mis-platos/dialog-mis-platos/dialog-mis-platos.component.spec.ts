import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMisPlatosComponent } from './dialog-mis-platos.component';

describe('DialogMisPlatosComponent', () => {
  let component: DialogMisPlatosComponent;
  let fixture: ComponentFixture<DialogMisPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMisPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMisPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
