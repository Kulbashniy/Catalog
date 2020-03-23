import { TestBed } from '@angular/core/testing';

import { CatalogPageService } from './catalog-page.service';

describe('CatalogPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogPageService = TestBed.get(CatalogPageService);
    expect(service).toBeTruthy();
  });
});
