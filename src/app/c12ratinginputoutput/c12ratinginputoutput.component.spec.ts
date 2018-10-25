import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C12ratinginputoutputComponent } from './c12ratinginputoutput.component';

describe('C12ratinginputoutputComponent', () => {
  let component: C12ratinginputoutputComponent;
  let fixture: ComponentFixture<C12ratinginputoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C12ratinginputoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C12ratinginputoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
