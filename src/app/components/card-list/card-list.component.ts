import { Component, OnInit,Input } from '@angular/core';

	@Component({
	  selector: 'app-card-list',
	  templateUrl: './card-list.component.html',
	})
export class CardListComponent implements OnInit {

	@Input() cardListData; 

  	constructor() { }

	ngOnInit() {
		
	}

}
