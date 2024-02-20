import { TestBed } from '@angular/core/testing';

import { BoardingContractService } from './boarding-contract.service';

describe('BoardingContractService', () => {
  let service: BoardingContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardingContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
