import {
  async,
  inject,
  getTestBed,
  TestBed
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import { Book } from './../models/book';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let backend: MockBackend;
  let service: BooksService;
  const testBooks: Array<any> = 
  [
    {
      "id": 1,
      "name": "consectetur adipiscing elit",
      "desription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "author": "author1",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "tag": "Biography"
    },
    {
      "id": 2,
      "name": "ipsum dolor sit amet",
      "desription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
      "author": "author2",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "tag": "Novel"
    },
  ];
    
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BaseRequestOptions,
        MockBackend,
        BooksService,
        {
          deps: [
              MockBackend,
              BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
          }
      } 
      ]
      
    });
    const testbed = getTestBed();
      backend = testbed.get(MockBackend);
      service = testbed.get(BooksService);
  });
  
  function setupConnections(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
        if (connection.request.url === 'api/books') {
            const responseOptions = new ResponseOptions(options);
            const response = new Response(responseOptions);

            connection.mockRespond(response);
        }
    });
  }
  it('should return the list of Books from the server on success', () => {
    setupConnections(backend, {
      body: {
        "books": [
          {
              "id": 1,
              "name": "consectetur adipiscing elit",
              "desription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              "author": "author1",
              "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
              "tag": "Biography"
            },
            {
              "id": 2,
              "name": "ipsum dolor sit amet",
              "desription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
              "author": "author2",
              "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
              "tag": "Novel"
            },
            {
              "id": 3,
              "name": "book1",
              "desription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ",
              "author": "author1",
              "image": "",
              "tag": "Non Fiction"
            },
            
        ]
      },
      status: 200
    });
    service.getAllBooks().subscribe((book) => {
      expect(book[0].name).toBe('ada consectetur adipiscing elit');
      expect(book[1].name).toBe('ipsum dolor sit amet');
      expect(book[2].name).toBe('book1');
  });
});

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getBook', () => {
    it('should return the form matching the provided ID', () => {
        expect(service.getBook(5)).toEqual(testBooks[1]);
        expect(service.getBook(2)).toEqual(testBooks[0]);
    });

    it('should return `null` if it does NOT find a id matching the provided ID', () => {
        expect(service.getBook(9)).toBeNull();
        expect(service.getBook(null)).toBeNull();
        expect(service.getBook(0)).toBeNull();
    });
});

  it('should log an error to the console on error', () => {
    setupConnections(backend, {
        body: { error: `I'm afraid I've got some bad news!` },
        status: 500
    });
    spyOn(console, 'error');

    service.getAllBooks().subscribe(null, () => {
        expect(console.error).toHaveBeenCalledWith(`I'm afraid I've got some bad news!`);
    });
});
});
