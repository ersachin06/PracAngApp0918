import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2propbindingComponent } from './c2propbinding.component';

describe('C2propbindingComponent', () => {
  let component: C2propbindingComponent;
  let fixture: ComponentFixture<C2propbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2propbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2propbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
