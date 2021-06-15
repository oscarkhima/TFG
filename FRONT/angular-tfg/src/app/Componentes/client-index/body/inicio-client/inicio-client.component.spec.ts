import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioClientComponent } from './inicio-client.component';

describe('InicioClientComponent', () => {
  let component: InicioClientComponent;
  let fixture: ComponentFixture<InicioClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
