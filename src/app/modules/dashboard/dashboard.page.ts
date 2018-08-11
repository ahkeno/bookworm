	import { Component } from '@angular/core';
	import { Router} from "@angular/router";
	import { Observable, of } from 'rxjs';
	import { Book } from './../../share/models/book';
	import { BooksService } from './../../share/services/books.service';
	import { WrappedCollection } from './../../share/services/wrapped.collection';

	@Component({
	  selector: 'app-dashboard',
	  templateUrl: './dashboard.page.html'
	})
	export class DashboardPage {
		book: Observable<Book>;
		bookList: Observable<WrappedCollection<Book>>;

		constructor(
			private booksService: BooksService,
			private router : Router
			) {
			this.bookList = this.booksService.getAllBooks();
		}
		ngOnInit() {
		
		}

		onClickBook(event){
			this.router.navigate(['/book/'+ event]);
		}
		
		  

	}
