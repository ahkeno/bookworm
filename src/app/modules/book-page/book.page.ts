	import { Component,OnInit,ChangeDetectorRef,OnChanges } from '@angular/core';
	import { Router, ActivatedRoute, ParamMap} from '@angular/router';
	import { Observable, of ,Subject,interval} from 'rxjs';
	import { distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

	import { Book } from './../../share/models/book';
	import { BooksService } from './../../share/services/books.service';
	import { WrappedCollection } from './../../share/services/wrapped.collection';
	import { CommentService } from './../../share/services/comments.service';

	@Component({
	  selector: 'app-book-page',
	  templateUrl: './book.page.html'
	})
	export class BookPage implements OnInit{
		book: any;
		bookId: string;
		commentDataWithId: any;
		comments : any;

		constructor(
			private ref: ChangeDetectorRef,
			private booksService: BooksService,
			private commentService: CommentService,
			private router : Router,
			private route: ActivatedRoute
			) {
			this.route.params.subscribe(queryParams => {
			 
			 this.bookId = queryParams.id;

			});
		}
		ngOnInit() {
			this.loadBook();
			this.getCommentWithId(this.bookId);
		}

		loadBook(){
			this.booksService.getBook(this.bookId).subscribe(dataBook => {
				this.book = dataBook;
			} );
		}
		
		getCommentWithId(bookId) {
			this.commentService.getCommentbyId(bookId).subscribe
			(dataComments => {
				
				this.commentDataWithId = dataComments;
			} );

		}
		
		onClickDashboard(){
			this.router.navigate(['/']);
		}

		newCommentSave(event){
			if(event.newCommentSave){
				this.commentDataWithId = this.getCommentWithId( this.bookId);
				this.ref.detectChanges();
			}
			
		}

	}
