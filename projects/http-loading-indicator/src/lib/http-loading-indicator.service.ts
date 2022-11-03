import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * LoadingIndicatorの表示、非表示状態を保持します。
 */
@Injectable({
  providedIn: 'root',
})
export class HttpLoadingIndicatorService {
  private visibleCount = 0;
  // 初期値は非表示
  private readonly visibility = new BehaviorSubject<boolean>(false);

  get visibility$(): Observable<boolean> {
    return this.visibility.asObservable();
  }

  show(): void {
    this.visibility.next(++this.visibleCount > 0);
  }

  hide(): void {
    this.visibility.next(--this.visibleCount > 0);

    // なにかの間違いで0未満になってしまったとき用の保険
    if (this.visibleCount < 0) {
      this.visibleCount = 0;
    }
  }
}
