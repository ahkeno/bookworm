import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { Book } from './../../share/models/book';


@Component({
  selector: 'app-comment-component',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  // @Output() cardClick = new EventEmitter<any>();
  @Input() commentData;
  
  constructor(
  	iconRegistry: MatIconRegistry,
  	sanitizer: DomSanitizer,
  	) {
  	iconRegistry.addSvgIcon(
        'labels',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/labels.svg'));
  }
  
  ngOnInit() {
    console.log("in comment component", this.commentData);
  }
  // onCardClick(event,id){
  //   this.cardClick.next(id);
  // }

}
