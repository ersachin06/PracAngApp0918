import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C19AirlinesComponent } from './c19-airlines.component';

describe('C19AirlinesComponent', () => {
  let component: C19AirlinesComponent;
  let fixture: ComponentFixture<C19AirlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C19AirlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C19AirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
