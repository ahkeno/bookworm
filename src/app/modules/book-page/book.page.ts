	import { Component,OnInit } from '@angular/core';
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

		constructor(
			private booksService: BooksService,
			private commentService: CommentService,
			private route: ActivatedRoute
			) {
			this.route.params.subscribe(queryParams => {
			 
			 this.bookId = queryParams.id;

			});
		}
		ngOnInit() {
			this.loadBook();
			this.loadComments();
		}

		loadBook(){
			this.booksService.getBook(this.bookId).subscribe(dataBook => {
				this.book = dataBook;
			} );
		}

		loadComments(){
			this.commentService.getComments().subscribe(dataComments => {
				this.commentDataWithId = this.getCommentWithId(dataComments,this.bookId);
			} );
		}
		
		getCommentWithId(comments, bookId) {
			let commentList = comments.filter(comments => comments.bookid == bookId);
  			return commentList;
		}
		  

	}
