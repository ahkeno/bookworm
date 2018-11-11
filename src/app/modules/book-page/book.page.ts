	import { Component,OnInit } from '@angular/core';
	import { Router, ActivatedRoute, ParamMap} from '@angular/router';
	import { Observable, of ,Subject,interval} from 'rxjs';
	import { distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

	import { Book } from './../../share/models/book';
	import { BooksService } from './../../share/services/books.service';
	import { WrappedCollection } from './../../share/services/wrapped.collection';
	

	@Component({
	  selector: 'app-book-page',
	  templateUrl: './book.page.html'
	})
	export class BookPage implements OnInit{
		book: any;
		bookId: string;

		constructor(
			private booksService: BooksService,
			private route: ActivatedRoute
			) {
			this.route.params.subscribe(queryParams => {
			 
			 this.bookId = queryParams.id;

			});
		}
		ngOnInit() {
			
			this.booksService.getBook(this.bookId).subscribe(dataBook => {
				 debugger;
				this.book = dataBook;
			} );
		}
		
		  

	}
