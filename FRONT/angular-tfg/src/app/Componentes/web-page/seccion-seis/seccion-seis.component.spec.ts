import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSeisComponent } from './seccion-seis.component';

describe('SeccionSeisComponent', () => {
  let component: SeccionSeisComponent;
  let fixture: ComponentFixture<SeccionSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionSeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
