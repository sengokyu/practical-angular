import { TestBed } from '@angular/core/testing';
import { skip } from 'rxjs';
import { HttpLoadingIndicatorService } from './http-loading-indicator.service';

describe('HttpLoadingIndicatorService', () => {
  let instance: HttpLoadingIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    instance = TestBed.inject(HttpLoadingIndicatorService);
  });

  it('should be created', () => {
    expect(instance).toBeTruthy();
  });

  it('最初は非表示', (done) => {
    instance.visibility$.subscribe((x) => {
      // Then
      expect(x).toBeFalsy();
      done();
    });
  });

  it('showを呼ぶと、visibilityがtrueになる', (done) => {
    // Given

    instance.visibility$.pipe(skip(1)).subscribe((x) => {
      // Then
      expect(x).toBeTruthy();
      done();
    });

    // When
    instance.show();
  });

  it('showのあとhideを呼ぶと、visibilityがfalseになる', (done) => {
    // Given

    // 3回目までスキップxs
    instance.visibility$.pipe(skip(2)).subscribe((x) => {
      // Then
      expect(x).toBeFalsy();
      done();
    });

    // When
    instance.show();
    instance.hide();
  });
});
