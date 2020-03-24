import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TovarWindowComponent } from './tovar-window.component';

describe('TovarWindowComponent', () => {
  let component: TovarWindowComponent;
  let fixture: ComponentFixture<TovarWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TovarWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TovarWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
