import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempprodComponent } from './tempprod.component';

describe('TempprodComponent', () => {
  let component: TempprodComponent;
  let fixture: ComponentFixture<TempprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
