import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userstemp11Component } from './userstemp11.component';

describe('Userstemp11Component', () => {
  let component: Userstemp11Component;
  let fixture: ComponentFixture<Userstemp11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userstemp11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userstemp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
