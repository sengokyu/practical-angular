import { NgModule } from '@angular/core';

@NgModule({
  providers: [{ provide: Storage, useValue: window.localStorage }],
})
export class LocalStorageModule {}
