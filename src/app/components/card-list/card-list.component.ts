import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

	@Component({
	  selector: 'app-card-list',
	  templateUrl: './card-list.component.html',
	})
export class CardListComponent implements OnInit {
	
	@Output() cardClick = new EventEmitter<any>();
	@Input() cardListData; 

  	constructor() { }

	ngOnInit() {
		
	}
	onClickBook(event){
		
    	this.cardClick.next(event);
  	}
}
