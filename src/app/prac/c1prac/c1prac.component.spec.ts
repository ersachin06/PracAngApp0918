import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1pracComponent } from './c1prac.component';

describe('C1pracComponent', () => {
  let component: C1pracComponent;
  let fixture: ComponentFixture<C1pracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1pracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1pracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
