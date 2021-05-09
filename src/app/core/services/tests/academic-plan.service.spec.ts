import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AcademicPlanService } from '../academic-plan.service';

describe('AcademicPlanService', () => {
  let service: AcademicPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AcademicPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
