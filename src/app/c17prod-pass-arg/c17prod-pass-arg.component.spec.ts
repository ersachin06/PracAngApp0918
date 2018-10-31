import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C17prodPassArgComponent } from './c17prod-pass-arg.component';

describe('C17prodPassArgComponent', () => {
  let component: C17prodPassArgComponent;
  let fixture: ComponentFixture<C17prodPassArgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C17prodPassArgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C17prodPassArgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
