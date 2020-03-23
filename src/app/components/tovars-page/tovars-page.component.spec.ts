import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TovarsPageComponent } from './tovars-page.component';

describe('TovarsPageComponent', () => {
  let component: TovarsPageComponent;
  let fixture: ComponentFixture<TovarsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TovarsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TovarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
