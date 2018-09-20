import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C5AtbtDirectiveComponent } from './c5-atbt-directive.component';

describe('C5AtbtDirectiveComponent', () => {
  let component: C5AtbtDirectiveComponent;
  let fixture: ComponentFixture<C5AtbtDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C5AtbtDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C5AtbtDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
