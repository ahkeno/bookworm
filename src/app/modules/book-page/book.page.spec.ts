
import { TestBed, fakeAsync, tick,async,inject} from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoreModule } from './../../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPage } from './../../modules/dashboard/dashboard.page';
import { SearchComponent } from './../../components/searchBox/search-box.component';
import { CardComponent } from './../../components/card/card.component';
import { CardListComponent } from './../../components/card-list/card-list.component';
import { BooksService }from './../../share/services/books.service';

describe('Landing to Dashboard Page ', () => {
  let page: DashboardPage;
  

  beforeEach(async() =>{
  	 TestBed.configureTestingModule({
  	  imports: [
        CoreModule,HttpClientModule
      ],
      providers: [ BooksService,HttpTestingController,HttpClient],
      declarations: [
        DashboardPage,
        CardListComponent,
        SearchComponent,
        CardComponent
		
      ]
    }).compileComponents();
  })

  it(`should create`, async(inject([HttpTestingController, BooksService],(httpClient: HttpTestingController, booksService: BooksService) => {
    const fixture = TestBed.createComponent(DashboardPage);
      const page = fixture.debugElement.componentInstance;
      expect(booksService).toBeTruthy();	
    }
  )));
  
});