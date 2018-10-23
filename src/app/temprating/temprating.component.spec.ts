import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempratingComponent } from './temprating.component';

describe('TempratingComponent', () => {
  let component: TempratingComponent;
  let fixture: ComponentFixture<TempratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
