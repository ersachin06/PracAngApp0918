import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C13prodinputoutputComponent } from './c13prodinputoutput.component';

describe('C13prodinputoutputComponent', () => {
  let component: C13prodinputoutputComponent;
  let fixture: ComponentFixture<C13prodinputoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C13prodinputoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C13prodinputoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
