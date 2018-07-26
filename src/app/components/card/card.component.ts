import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { Book } from './../../share/models/book';


@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

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

}