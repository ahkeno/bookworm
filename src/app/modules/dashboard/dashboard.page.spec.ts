
import { TestBed, fakeAsync, tick,async} from '@angular/core/testing';
import { CoreModule } from './../../core/core.module';
import { DashboardPage } from './dashboard.page';
import { SearchComponent } from './../../components/searchBox/search-box.component';
import { CardsComponent } from './../../components/cards/cards.component';

describe('Landing to Dashboard Page ', () => {
  let page: DashboardPage;
  

  beforeEach(async() =>{
  	 TestBed.configureTestingModule({
  	  imports: [
        CoreModule
      ],
      declarations: [
        DashboardPage,
        SearchComponent,
        CardsComponent
		
      ]
    }).compileComponents();
  })

  it(`should create`, async(() => {
  	const fixture = TestBed.createComponent(DashboardPage);
    const page = fixture.debugElement.componentInstance;
    expect(page).toBeTruthy();
  }));

});