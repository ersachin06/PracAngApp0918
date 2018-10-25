import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C14prodeventobjectComponent } from './c14prodeventobject.component';

describe('C14prodeventobjectComponent', () => {
  let component: C14prodeventobjectComponent;
  let fixture: ComponentFixture<C14prodeventobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C14prodeventobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C14prodeventobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
