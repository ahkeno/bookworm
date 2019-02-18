	import { Component } from '@angular/core';
	import { Router,ActivatedRoute} from "@angular/router";
	import { Observable, of } from 'rxjs';
	import { TagsService } from './../../share/services/tags.service';
	@Component({
	  selector: 'app-dashboard',
	  templateUrl: './category-list.page.html'
	})
	export class CategoryListPage {
		tag: string;
		tagList: any;

		constructor(
			private tagService: TagsService,
			private router : Router,
			private route: ActivatedRoute
			) {
				this.route.params.subscribe(queryParams => {
				 
				 this.tag = queryParams.tag;
	
				});
			}
		ngOnInit() {
			//load the service with tag
			this.loadBookList(this.tag);
		}
		
		loadBookList(tag){
			this.tagService.getBookListByTag(tag).subscribe(dataTags => 	{
				console.log("search result",dataTags);
				this.tagList = dataTags;
			} );
		}
		onTagClick(event,id){
			console.log("OnClick of Tag",id);
			this.router.navigate(['/book/'+ id]);
		}

		onClickDashboard(){
			this.router.navigate(['/']);
		}

	}
