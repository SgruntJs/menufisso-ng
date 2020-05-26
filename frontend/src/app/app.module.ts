import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InserReviewComponent } from './pages/admin/inser-review/inser-review.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InserReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
