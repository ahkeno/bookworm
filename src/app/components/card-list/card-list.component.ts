import { Component, OnInit,Input } from '@angular/core';

	@Component({
	  selector: 'app-card-list',
	  templateUrl: './card-list.component.html',
	})
export class CardListComponent implements OnInit {

	@Input() cardListData; 

  	constructor() { }

	ngOnInit() {
		 /* CSS refresh comment 
.image-upload-tooltip  #uniform-setGoalUpload .filename{width: 225px}
*/;
		console.log("this.cardListData",this.cardListData);
	}

}
