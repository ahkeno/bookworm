import { Component, OnInit,Input, Output ,EventEmitter,OnChanges} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './../../share/models/comment';
import { CommentService } from './../../share/services/comments.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailComponent implements OnInit {
	comment: any;
	newComment: boolean;
	@Input() bookData: any;
	@Output() newCommentSave = new EventEmitter<any>();

	constructor(
		private commentService: CommentService) { }

	ngOnInit() {
		//for now adding comment 
		this.newComment = true;//later come with book deatail service and check there has comment for the commeter or not
	}

	onClickComment(event){
		this.comment ={ 
			commenter: "author1", //using mock data for now,will come from user profile 
    		image: "https://avatars3.githubusercontent.com/u/11384791?s=400&v=4", //using mock data for now,will come from user profile 
    		bookId: this.bookData.id,
    		desription : event,
    		tag: []
    	}
		

		if(this.comment){
			this.commentService.postComment(this.comment).subscribe(
				commentResult => {
		      //to do show notification of successfully comment
			
		      //hide comment component
		      this.newComment = false;
				},
				(error) => console.error("error"),
				() => { this.newCommentSave.next({"newCommentSave": true})}
				);
		}
	}

}
