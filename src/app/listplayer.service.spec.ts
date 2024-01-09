import { TestBed } from '@angular/core/testing';

import { ListplayerService } from './listplayer.service';

describe('ListplayerService', () => {
  let service: ListplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
