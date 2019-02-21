import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { Book } from './../../share/models/book';


@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() cardClick = new EventEmitter<any>();
  @Input() cardData;
  
  constructor(
  	iconRegistry: MatIconRegistry,
  	sanitizer: DomSanitizer,
  	) {
  	iconRegistry.addSvgIcon(
        'labels',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/labels.svg'));
  }
  
  ngOnInit() {
  }
  
  onCardClick(event,id){
    this.cardClick.next(id);
  }

}
