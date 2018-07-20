
import { TestBed, fakeAsync, tick,async} from '@angular/core/testing';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CdkTableModule} from '@angular/cdk/table';
import { CdkTreeModule} from '@angular/cdk/tree';
import { BrowserModule } from '@angular/platform-browser';
import {

  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { SearchComponent } from './search-box.component';


describe('Search Box Compnent ', () => {
  let component: SearchComponent;
  

  beforeEach(async() =>{
  	 TestBed.configureTestingModule({
  	  imports: [
  	  	MatAutocompleteModule,
    		MatBadgeModule,
    		MatBottomSheetModule,
    		MatButtonModule,
    		MatButtonToggleModule,
    		MatCardModule,
    		MatCheckboxModule,
    		MatChipsModule,
    		MatDatepickerModule,
    		MatDialogModule,
    		MatDividerModule,
    		MatExpansionModule,
    		MatGridListModule,
    		MatIconModule,
    		MatInputModule,
    		MatListModule,
    		MatMenuModule,
    		MatNativeDateModule,
    		MatPaginatorModule,
    		MatProgressBarModule,
    		MatProgressSpinnerModule,
    		MatRadioModule,
    		MatRippleModule,
    		MatSelectModule,
    		MatSidenavModule,
    		MatSliderModule,
    		MatSlideToggleModule,
    		MatSnackBarModule,
    		MatSortModule,
    		MatStepperModule,
    		MatTableModule,
    		MatTabsModule,
    		MatToolbarModule,
    		MatTooltipModule,
    		MatTreeModule
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