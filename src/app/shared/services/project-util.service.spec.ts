import { TestBed } from '@angular/core/testing';

import { ProjectUtilService } from './project-util.service';

describe('ProjectUtilService', () => {
  let service: ProjectUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
