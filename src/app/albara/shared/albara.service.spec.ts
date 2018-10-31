import { TestBed, inject } from '@angular/core/testing';

import { AlbaraService } from './albara.service';

xdescribe('AlbaraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbaraService]
    });
  });

  it('should be created', inject([AlbaraService], (service: AlbaraService) => {
    expect(service).toBeTruthy();
  }));
});
