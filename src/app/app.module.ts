
import { NgModule } from '@angular/core';
import { CoreModule }	from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }	from './routes/app.route.module';

import { AppComponent } from './app.component';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { BookPage } from './modules/book-page/book.page';
import { CategoryListPage } from './modules/category-list/category-list.page';

import { SearchComponent } from './components/searchBox/search-box.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
// Service

import { BooksService }from './share/services/books.service';
import { CommentService }from './share/services/comments.service';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { TagsService }from './share/services/tags.service';



@NgModule({
  declarations: [
    AppComponent,
    BookPage,
    DashboardPage,
    CategoryListPage,
    SearchComponent,
    CardComponent,
    CardListComponent,
    NewCommentComponent,
    CardDetailComponent,
    CommentListComponent,
    CommentComponent

  ],
  imports: [
    HttpClientModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [ BooksService,CommentService,TagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
