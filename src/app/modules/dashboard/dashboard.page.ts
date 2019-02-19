	import { Component,Input,Output } from '@angular/core';
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
		searchResultsFound: boolean;
		searchResults: any;
		keywords: string = "";

		constructor(
			private booksService: BooksService,
			private tagService: TagsService,
			private router : Router
			) {
			this.bookList = this.booksService.getAllBooks();
			
		}
		ngOnInit() {
			this.searchResultsFound = false;
			this.loadTags();
		}

		onClickBook(event){
			this.router.navigate(['/book/'+ event]);
		}
		
		loadTags(){
			
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
		onSearchResult(data){
			debugger;
			if(data[0].results.length !== 0){
				this.searchResultsFound = true;
				this.searchResults = data[0].results;
				this.keywords = data[0].keyword;
			}else{
				this.searchResultsFound = false;
				this.keywords = data[0].keyword;
			}
			
		}

		onBookClick(event,id){
			this.router.navigate(['/book/'+ id]);
		}

	}
