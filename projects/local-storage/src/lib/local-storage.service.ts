import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private readonly storage: Storage) {}

  setItem<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string, defaultValue: T | null = null): T | null {
    const value = this.storage.getItem(key);

    return value !== null ? JSON.parse(value) : defaultValue;
  }

  // Remove specific key item
  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  // Clear all items
  clear(): void {
    this.storage.clear();
  }
}
