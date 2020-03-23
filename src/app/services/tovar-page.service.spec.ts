import { TestBed } from '@angular/core/testing';

import { TovarPageService } from './tovar-page.service';

describe('TovarPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TovarPageService = TestBed.get(TovarPageService);
    expect(service).toBeTruthy();
  });
});
