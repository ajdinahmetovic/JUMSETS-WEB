import { TestBed } from '@angular/core/testing';

import { StudentcontentService } from './studentcontent.service';

describe('StudentcontentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentcontentService = TestBed.get(StudentcontentService);
    expect(service).toBeTruthy();
  });
});
