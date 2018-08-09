import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html'
})
export class CardDetailComponent implements OnInit {

	@Input() bookData: any;

	constructor() { }

	ngOnInit() {
	}

}
