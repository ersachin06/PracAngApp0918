import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C15ratingsendingobjectComponent } from './c15ratingsendingobject.component';

describe('C15ratingsendingobjectComponent', () => {
  let component: C15ratingsendingobjectComponent;
  let fixture: ComponentFixture<C15ratingsendingobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C15ratingsendingobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C15ratingsendingobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
