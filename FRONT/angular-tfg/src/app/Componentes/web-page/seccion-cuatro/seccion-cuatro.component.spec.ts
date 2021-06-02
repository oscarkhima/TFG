import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCuatroComponent } from './seccion-cuatro.component';

describe('SeccionCuatroComponent', () => {
  let component: SeccionCuatroComponent;
  let fixture: ComponentFixture<SeccionCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
