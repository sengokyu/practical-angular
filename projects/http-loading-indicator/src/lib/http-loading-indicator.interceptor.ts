import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpLoadingIndicatorService } from './http-loading-indicator.service';

@Injectable()
export class HttpLoadingIndicatorInterceptor implements HttpInterceptor {
  constructor(private loadingIndicator: HttpLoadingIndicatorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingIndicator.show();

    return next.handle(req).pipe(finalize(() => this.loadingIndicator.hide()));
  }
}

export const HTTP_LOADING_INDICATOR_INTERCEPTOR_PROVIDERS: Provider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpLoadingIndicatorInterceptor,
    multi: true,
    deps: [HttpLoadingIndicatorService],
  },
];
