import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageModule } from 'local-storage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, LocalStorageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
