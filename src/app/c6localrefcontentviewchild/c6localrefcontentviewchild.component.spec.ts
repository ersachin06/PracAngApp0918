import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C6localrefcontentviewchildComponent } from './c6localrefcontentviewchild.component';

describe('C6localrefcontentviewchildComponent', () => {
  let component: C6localrefcontentviewchildComponent;
  let fixture: ComponentFixture<C6localrefcontentviewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C6localrefcontentviewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C6localrefcontentviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
