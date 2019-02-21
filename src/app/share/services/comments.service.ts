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
                  return Observable.throw(error);
                }) // to do error notification while service fail
               );
    }
    getComments():Observable<Comment>{
      
      
      return this.http.get<Comment>(this.urlComments).pipe(
        tap(commentdata => console.log("fetch Comment wiht ID",commentdata), ),
        catchError((error:any) => {
          return Observable.throw(error);
        }) // to do error notification while service fail
          );
    }

    getCommentbyId(id):Observable<Comment>{

      const commentIDURL = this.urlComments + '?bookId=' + id ;

      return this.http.get<Comment>(commentIDURL).pipe(
        tap(commentdata => console.log("fetch comment wiht ID",commentdata) ),
        catchError((error:any) => {
          return Observable.throw(error);
        }) // to do error notification while service fail
          );
    }
  

}