import { ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpLoadingIndicatorDirective } from './http-loading-indicator.directive';
import { HttpLoadingIndicatorService } from './http-loading-indicator.service';

describe('HttpLoadingIndicatorDirective', () => {
  let el: ElementRef;
  let loadingIndicator: HttpLoadingIndicatorService;

  beforeEach(() => {
    el = { nativeElement: { style: { display: 'unset' } } };
    loadingIndicator = {
      visibility$: new Subject<boolean>(),
    } as unknown as HttpLoadingIndicatorService;
  });

  it('should create an instance', () => {
    const directive = new HttpLoadingIndicatorDirective(el, loadingIndicator);
    expect(directive).toBeTruthy();
  });

  describe('initとdestroyあり', () => {
    let instance: HttpLoadingIndicatorDirective;

    beforeEach(() => {
      instance = new HttpLoadingIndicatorDirective(el, loadingIndicator);
      instance.ngOnInit();
    });

    afterEach(() => {
      instance.ngOnDestroy();
    });

    it('display=contentsになる', () => {
      // Given

      // When
      (loadingIndicator.visibility$ as Subject<boolean>).next(true);

      // Then
      expect(el.nativeElement.style.display).toEqual('contents');
    });

    it('display=noneになる', () => {
      // Given

      // When
      (loadingIndicator.visibility$ as Subject<boolean>).next(false);

      // Then
      expect(el.nativeElement.style.display).toEqual('none');
    });
  });
});
