import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstempComponent } from './userstemp.component';

describe('UserstempComponent', () => {
  let component: UserstempComponent;
  let fixture: ComponentFixture<UserstempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
