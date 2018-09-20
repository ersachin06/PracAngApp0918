import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C6imgdispthclickComponent } from './c6imgdispthclick.component';

describe('C6imgdispthclickComponent', () => {
  let component: C6imgdispthclickComponent;
  let fixture: ComponentFixture<C6imgdispthclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C6imgdispthclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C6imgdispthclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
