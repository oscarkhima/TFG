import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarQrComponent } from './generar-qr.component';

describe('GenerarQrComponent', () => {
  let component: GenerarQrComponent;
  let fixture: ComponentFixture<GenerarQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
