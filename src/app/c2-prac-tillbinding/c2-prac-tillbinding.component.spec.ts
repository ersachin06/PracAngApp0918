import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2PracTillbindingComponent } from './c2-prac-tillbinding.component';

describe('C2PracTillbindingComponent', () => {
  let component: C2PracTillbindingComponent;
  let fixture: ComponentFixture<C2PracTillbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2PracTillbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2PracTillbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
