import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let storageSpy: any;
  let service: LocalStorageService;

  beforeEach(() => {
    storageSpy = jasmine.createSpyObj('Storage', [
      'setItem',
      'getItem',
      'clear',
      'removeItem',
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: Storage, useValue: storageSpy },
        LocalStorageService,
      ],
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set item', () => {
    // Given
    const key = 'key1';
    const value = { foo: 'bar' };

    // When
    service.setItem(key, value);

    // Then
    expect(storageSpy.setItem).toHaveBeenCalledWith(key, '{"foo":"bar"}');
  });

  it('should return value', () => {
    // Given
    const key = 'key2';
    const value = '{"hoge":"fuga"}';

    storageSpy.getItem.and.returnValue(value);

    // When
    const actual = service.getItem(key);

    // Then
    expect(actual).toEqual({ hoge: 'fuga' });
    expect(storageSpy.getItem).toHaveBeenCalledWith(key);
  });

  it('should return default value', () => {
    // Given
    const key = 'key3';
    const defaultValue = 12345;

    storageSpy.getItem.and.returnValue(null);

    // When
    const actual = service.getItem(key, defaultValue);

    // Then
    expect(actual).toBe(defaultValue);
    expect(storageSpy.getItem).toHaveBeenCalledWith(key);
  });

  it('should call removeItem', () => {
    // Given
    const key = 'key4';

    // When
    service.removeItem(key);

    // Then
    expect(storageSpy.removeItem).toHaveBeenCalledWith(key);
  });

  it('should call clear', () => {
    // Given

    // When
    service.clear();

    // Then
    expect(storageSpy.clear).toHaveBeenCalled();
  });
});
