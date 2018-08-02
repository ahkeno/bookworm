
import { NgModule } from '@angular/core';
import { CoreModule }	from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }	from './routes/app.route.module';

import { AppComponent } from './app.component';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { SearchComponent } from './components/searchBox/search-box.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';

// Service

import { BooksService }from './share/services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    SearchComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    HttpClientModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [ BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
