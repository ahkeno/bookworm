import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


import { Tag } from './../models/tag';
import { Book } from './../models/book';
import { environment } from '../../../environments/environment';


@Injectable()

export class TagsService {
	private rootUrl = `${environment.API_ROOT}`;
    private urlBooks = this.rootUrl + 'books';
  
	private httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};	

  constructor(
  	private http: HttpClient
  	
  	) { }

  	
    getTags():Observable<any>{
      
      return this.http.get<Tag>(this.urlBooks).pipe(
        tap(tagdata => console.log("fetch Tag ",tagdata), ),
        catchError((error:any) => {
          return Observable.throw(error);
        }) // to do error notification while service fail
          );
    }
    getBookListByTag(tag):Observable<Book>{

      const tagsearchURL = this.urlBooks + '/_search?tag=' + tag ;

      return this.http.get<Book>(tagsearchURL).pipe(
        tap(bookdata => console.log("fetch Book wiht tag") ),
        catchError((error:any) => {
          return Observable.throw(error);
        }) // to do error notification while service fail
          );
    }

  

}