import { Component } from '@angular/core';
import { Book } from './../../share/models/book';
import { cards } from './../../share/models/mock-book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html'
})
export class DashboardPage {

	bookData = cards;
	constructor() {
	}
	ngOnInit() {

	  }

}
