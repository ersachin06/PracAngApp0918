import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp99Component } from './temp99.component';

describe('Temp99Component', () => {
  let component: Temp99Component;
  let fixture: ComponentFixture<Temp99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
