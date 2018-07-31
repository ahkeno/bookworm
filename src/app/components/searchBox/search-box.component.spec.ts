
import { TestBed, fakeAsync, tick,async} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CoreModule } from './../../core/core.module';
import { SearchComponent } from './search-box.component';


describe('Search Box Compnent ', () => {
  let component: SearchComponent;
  

  beforeEach(async() =>{
  	 TestBed.configureTestingModule({
  	  imports: [
  	  	CoreModule
  	  ],
      declarations: [
        SearchComponent,
        
		
      ]
    }).compileComponents();
  })

  it(`should create`, async(() => {
  	const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});