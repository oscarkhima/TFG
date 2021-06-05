import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPlatosComponent } from './mis-platos.component';

describe('MisPlatosComponent', () => {
  let component: MisPlatosComponent;
  let fixture: ComponentFixture<MisPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
