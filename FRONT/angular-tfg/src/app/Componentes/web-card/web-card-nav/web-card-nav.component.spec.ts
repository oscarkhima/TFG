import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCardNavComponent } from './web-card-nav.component';

describe('WebCardNavComponent', () => {
  let component: WebCardNavComponent;
  let fixture: ComponentFixture<WebCardNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCardNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
