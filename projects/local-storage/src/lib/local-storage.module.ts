import { NgModule } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  providers: [
    { provide: Storage, useValue: window.localStorage },
    LocalStorageService,
  ],
})
export class LocalStorageModule {}
