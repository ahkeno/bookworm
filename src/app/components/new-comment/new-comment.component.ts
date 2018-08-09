import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html'
})
export class NewCommentComponent implements OnInit {

  @Input() bookId;
  @Output() commentSave = new EventEmitter<any>();

  comment: String;

  constructor() { }

  ngOnInit() {
  	console.log("bookId::", this.bookId);
  }

  onClickCommentSave(event){
  	
  	this.commentSave.next(this.comment);
  }

}
