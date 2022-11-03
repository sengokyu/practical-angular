import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
  HttpLoadingIndicatorModule,
  HTTP_LOADING_INDICATOR_INTERCEPTOR_PROVIDERS
} from 'http-loading-indicator';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    HttpLoadingIndicatorModule,
  ],
  providers: [HTTP_LOADING_INDICATOR_INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
