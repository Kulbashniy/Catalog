import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceCategoryWindowComponent } from './replace-category-window.component';

describe('ReplaceCategoryWindowComponent', () => {
  let component: ReplaceCategoryWindowComponent;
  let fixture: ComponentFixture<ReplaceCategoryWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceCategoryWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceCategoryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
