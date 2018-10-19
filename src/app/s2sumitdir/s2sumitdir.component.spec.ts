import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2sumitdirComponent } from './s2sumitdir.component';

describe('S2sumitdirComponent', () => {
  let component: S2sumitdirComponent;
  let fixture: ComponentFixture<S2sumitdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2sumitdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2sumitdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
