	import { Component } from '@angular/core';
	import { Book } from './../../share/models/book';
	import { mockBook } from './../../share/models/mock-book';

	@Component({
	  selector: 'app-dashboard',
	  templateUrl: './dashboard.page.html'
	})
	export class DashboardPage {
		bookList = mockBook;

		constructor() {
		}
		ngOnInit() {
			debugger;
		  }

	}
