	import { Component } from '@angular/core';
	import { Router} from "@angular/router";
	import { Observable, of } from 'rxjs';
	import { Book } from './../../share/models/book';
	import { BooksService } from './../../share/services/books.service';
	import { TagsService } from './../../share/services/tags.service';
	import { WrappedCollection } from './../../share/services/wrapped.collection';

	@Component({
	  selector: 'app-dashboard',
	  templateUrl: './dashboard.page.html'
	})
	export class DashboardPage {
		book: Observable<Book>;
		bookList: Observable<WrappedCollection<Book>>;
		tagList: any;

		constructor(
			private booksService: BooksService,
			private tagService: TagsService,
			private router : Router
			) {
			this.bookList = this.booksService.getAllBooks();
			
		}
		ngOnInit() {
			this.loadTags();
		}

		onClickBook(event){
			this.router.navigate(['/book/'+ event]);
		}
		
		loadTags(){
			var that = this;
			this.tagService.getTags().subscribe(dataTags => 	{
				let  categoryList = [];
				dataTags.forEach(function(element) {
					categoryList.indexOf(element.tag)=== -1 ? categoryList.push(element.tag) : console.log("");
					
				});
				this.tagList = categoryList;
			} );
		}
		onClickTage(event,tag){
			this.router.navigate(['/category/'+ tag]);

		}

	}
