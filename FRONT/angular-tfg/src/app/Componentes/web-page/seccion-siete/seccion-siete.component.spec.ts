import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSieteComponent } from './seccion-siete.component';

describe('SeccionSieteComponent', () => {
  let component: SeccionSieteComponent;
  let fixture: ComponentFixture<SeccionSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionSieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
