import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  heroes: Array<Hero> = [];

  constructor(private http: HttpClient) {}

  invoke(): void {
    this.http
      .get<Array<Hero>>('api/heroes')
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
