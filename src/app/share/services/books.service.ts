import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


import { Book } from './../models/book';
import { WrappedCollection } from './/wrapped.collection';
import { environment } from '../../../environments/environment';



@Injectable()

export class BooksService {
	private rootUrl = `${environment.API_ROOT}`;
  private urlBooks = this.rootUrl + 'books';
  private urlBookDetail = this.rootUrl + 'book';
  private mock = `${environment.MOCK}` +'books'
	private httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};	

  constructor(
  	private http: HttpClient
  	
  	) { }

  	getAllBooks():Observable<WrappedCollection<Book>>{
  		
  		return this.http.get<WrappedCollection<Book>>(this.urlBooks).pipe(
  			tap(booksList => console.log(booksList)),
      	catchError((error:any) => {
          return Observable.throw(error);
        }) // to do error notification while service fail
      		);
  	}

    getBook(id):Observable<Book>{

      const bookURL = `${this.mock}/${id}` ;

      return this.http.get<Book>(bookURL).pipe(
        tap(bookdata => console.log("fetch Book wiht ID") ),
        catchError((error:any) => {
          return Observable.throw(error);
        }) // to do error notification while service fail
          );
    }

  

}