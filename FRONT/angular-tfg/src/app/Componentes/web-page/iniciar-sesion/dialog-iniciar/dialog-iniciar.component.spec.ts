import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIniciarComponent } from './dialog-iniciar.component';

describe('DialogIniciarComponent', () => {
  let component: DialogIniciarComponent;
  let fixture: ComponentFixture<DialogIniciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogIniciarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIniciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
