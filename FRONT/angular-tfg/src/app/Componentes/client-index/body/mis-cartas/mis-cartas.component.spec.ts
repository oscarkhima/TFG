import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCartasComponent } from './mis-cartas.component';

describe('MisCartasComponent', () => {
  let component: MisCartasComponent;
  let fixture: ComponentFixture<MisCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCartasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
