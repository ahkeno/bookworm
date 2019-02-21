import { Component,Output,EventEmitter,ElementRef } from '@angular/core';
import { Router,ActivatedRoute} from "@angular/router";
import { BooksService } from './../../share/services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search-box.component.html'
})
export class SearchComponent {

  @Output() onSearch = new EventEmitter<any>();
  constructor(
    private el: ElementRef,
    private booksService: BooksService,
    private router : Router,
		private route: ActivatedRoute
  ){
    
  }
  ngOnInit() {

  }

  serchBookName(keyword){
    if(keyword.target.value !== ""){
      this.booksService.searchBook(keyword.target.value).subscribe(dataBooks => {
        if(dataBooks){
          this.onSearch.next([
            {
            'results':dataBooks,
            'keyword':keyword.target.value
            }]);
        }
        } );
    }else{
      this.el.nativeElement.focus();
    }
    
  }
}
