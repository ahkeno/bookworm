	import { Component } from '@angular/core';
	import { Observable, of } from 'rxjs';
	import { Book } from './../../share/models/book';
	import { BooksService } from './../../share/services/books.service';
	import { WrappedCollection } from './../../share/services/wrapped.collection';
	//import { mockBook } from './../../share/models/mock-book';


	@Component({
	  selector: 'app-dashboard',
	  templateUrl: './dashboard.page.html'
	})
	export class DashboardPage {
		bookList: Observable<WrappedCollection<Book>>;

		constructor(
			private booksService: BooksService
			) {
			this.bookList = this.booksService.getAllBooks();
		}
		ngOnInit() {
		
		}
		
		  

	}
