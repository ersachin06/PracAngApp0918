import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3DirectiveComponent } from './c3-directive.component';

describe('C3DirectiveComponent', () => {
  let component: C3DirectiveComponent;
  let fixture: ComponentFixture<C3DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3DirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
