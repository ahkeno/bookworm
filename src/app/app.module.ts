
import { NgModule } from '@angular/core';
import { CoreModule }	from './core/core.module';
import { AppRoutingModule }	from './routes/app.route.module';

import { AppComponent } from './app.component';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { SearchComponent } from './components/searchBox/search-box.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    SearchComponent,
    CardsComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
