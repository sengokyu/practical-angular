import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HTTP_LOADING_INDICATOR_INTERCEPTOR_PROVIDERS } from './http-loading-indicator.interceptor';
import { HttpLoadingIndicatorService } from './http-loading-indicator.service';

@Component({ template: '' })
class FakeComponent {
  constructor(private http: HttpClient) {}

  invokeGetMethod(): void {
    this.http.get('/dummy-url').subscribe();
  }
}

describe('LoadingIndicatorInterceptor', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const loadingIndicator = jasmine.createSpyObj<HttpLoadingIndicatorService>([
      'show',
      'hide',
    ]);

    TestBed.configureTestingModule({
      declarations: [FakeComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpLoadingIndicatorService, useValue: loadingIndicator },
        HTTP_LOADING_INDICATOR_INTERCEPTOR_PROVIDERS,
      ],
    }).compileComponents();

    httpMock = TestBed.get(HttpTestingController);
  });

  it('リクエスト時にshowが呼ばれ、レスポンス時にhideが呼ばれる', () => {
    // given
    const fixture = TestBed.createComponent(FakeComponent);
    const component = fixture.componentInstance;
    const loadingIndicator: jasmine.SpyObj<HttpLoadingIndicatorService> =
      TestBed.get(HttpLoadingIndicatorService);

    // When
    component.invokeGetMethod();

    // Then
    expect(loadingIndicator.show).toHaveBeenCalled();

    // When
    httpMock.expectOne('/dummy-url').flush({});

    // Then
    expect(loadingIndicator.hide).toHaveBeenCalled();
  });
});
