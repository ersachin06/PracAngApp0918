import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C9prodComponent } from './c9prod.component';

describe('C9prodComponent', () => {
  let component: C9prodComponent;
  let fixture: ComponentFixture<C9prodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C9prodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C9prodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
