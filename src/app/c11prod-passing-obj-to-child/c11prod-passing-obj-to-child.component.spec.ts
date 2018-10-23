import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C11prodPassingObjToChildComponent } from './c11prod-passing-obj-to-child.component';

describe('C11prodPassingObjToChildComponent', () => {
  let component: C11prodPassingObjToChildComponent;
  let fixture: ComponentFixture<C11prodPassingObjToChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C11prodPassingObjToChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C11prodPassingObjToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
