import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V3directiveComponent } from './v3directive.component';

describe('V3directiveComponent', () => {
  let component: V3directiveComponent;
  let fixture: ComponentFixture<V3directiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V3directiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V3directiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
