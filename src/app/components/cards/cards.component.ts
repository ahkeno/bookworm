import { Component, OnInit,Input } from '@angular/core';
import { Book } from './../../share/models/book';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  @Input() cardData;
  
  constructor() {
  }
  
  ngOnInit() {
  	
  }

}
