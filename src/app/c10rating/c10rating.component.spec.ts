import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C10ratingComponent } from './c10rating.component';

describe('C10ratingComponent', () => {
  let component: C10ratingComponent;
  let fixture: ComponentFixture<C10ratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C10ratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C10ratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
