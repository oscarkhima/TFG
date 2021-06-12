import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCardComponent } from './web-card.component';

describe('WebCardComponent', () => {
  let component: WebCardComponent;
  let fixture: ComponentFixture<WebCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
