import { TestBed } from '@angular/core/testing';

import { RegisterStepsService } from './register-steps.service';

describe('RegisterStepsService', () => {
  let service: RegisterStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
