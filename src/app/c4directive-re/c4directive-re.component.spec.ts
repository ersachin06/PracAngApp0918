import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4directiveReComponent } from './c4directive-re.component';

describe('C4directiveReComponent', () => {
  let component: C4directiveReComponent;
  let fixture: ComponentFixture<C4directiveReComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4directiveReComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4directiveReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
