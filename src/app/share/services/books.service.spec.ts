import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksService]
    });
  });

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));
});
