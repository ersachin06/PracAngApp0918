import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V4imgvishideComponent } from './v4imgvishide.component';

describe('V4imgvishideComponent', () => {
  let component: V4imgvishideComponent;
  let fixture: ComponentFixture<V4imgvishideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V4imgvishideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V4imgvishideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
