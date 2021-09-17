import { TestBed } from '@angular/core/testing';

import { MockProjectService } from './mock-project.service';

describe('ProjectService', () => {
  let service: MockProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
