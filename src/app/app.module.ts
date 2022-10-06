import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from './services/interceptors/api-key.interceptor';
import { MoviesRoutingModule } from './modules/movies/movies-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MoviesRoutingModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : ApiKeyInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
