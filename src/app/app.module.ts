import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }	from './routes/app.route.module';

import { AppComponent } from './app.component';
import { DashboardPage } from './modules/dashboard/dashboard.page';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
