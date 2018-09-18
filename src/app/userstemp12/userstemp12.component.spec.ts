import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userstemp12Component } from './userstemp12.component';

describe('Userstemp12Component', () => {
  let component: Userstemp12Component;
  let fixture: ComponentFixture<Userstemp12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userstemp12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userstemp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
