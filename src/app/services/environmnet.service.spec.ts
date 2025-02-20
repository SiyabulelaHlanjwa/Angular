import { TestBed } from '@angular/core/testing';

import { EnvironmnetService } from './environmnet.service';

describe('EnvironmnetService', () => {
  let service: EnvironmnetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmnetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
