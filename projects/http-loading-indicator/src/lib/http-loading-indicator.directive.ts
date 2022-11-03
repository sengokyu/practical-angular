import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpLoadingIndicatorService } from './http-loading-indicator.service';

@Directive({
  selector: '[praHttpLoadingIndicator]',
})
export class HttpLoadingIndicatorDirective implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();

  constructor(
    private el: ElementRef,
    private loadingIndicator: HttpLoadingIndicatorService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.loadingIndicator.visibility$.subscribe((visibility) => {
        this.el.nativeElement.style.display = visibility ? 'contents' : 'none';
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
