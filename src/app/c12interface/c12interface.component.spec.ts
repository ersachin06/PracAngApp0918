import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C12interfaceComponent } from './c12interface.component';

describe('C12interfaceComponent', () => {
  let component: C12interfaceComponent;
  let fixture: ComponentFixture<C12interfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C12interfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C12interfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
