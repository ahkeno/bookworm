import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


import { Comment } from './../models/comment';
import { environment } from '../../../environments/environment';


@Injectable()

export class CommentService {
	private rootUrl = `${environment.API_ROOT}`;
  private urlComments = this.rootUrl + 'comments';

 
	private httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};	

  constructor(
  	private http: HttpClient
  	
  	) { }

  	postComment(commentData: Comment): Observable<Comment>{
      return this.http.post<Comment>(this.urlComments, commentData, this.httpOptions)
               .pipe(
                tap((comment: Comment) => console.log(`added comment w`)),
                catchError((error:any) => {
                  console.log("ERROR",error);
                  return Observable.throw(error);
                }) // to do error notification while service fail
               );
    }
    


  

}