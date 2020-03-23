import { TestBed } from '@angular/core/testing';

import { CategoriesPageService } from './categories-page.service';

describe('CategoriesPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesPageService = TestBed.get(CategoriesPageService);
    expect(service).toBeTruthy();
  });
});
