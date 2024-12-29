import { TestBed } from '@angular/core/testing';

import { InvestmentCalculateService } from './investment-calculate.service';

describe('InvestmentCalculateService', () => {
  let service: InvestmentCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
