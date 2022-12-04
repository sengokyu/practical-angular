import { Component } from '@angular/core';
import { LocalStorageService } from 'local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  key?: string;
  value?: any;

  constructor(private localStorageService: LocalStorageService) {}

  callSetItem(): void {
    this.localStorageService.setItem(this.key!, this.value);
    this.value = undefined;
  }

  callGetItem(): void {
    this.value = this.localStorageService.getItem(this.key!);
  }

  callRemoveItem(): void {
    this.localStorageService.removeItem(this.key!);
    this.key = undefined;
  }

  callClear(): void {
    this.localStorageService.clear();
  }
}
