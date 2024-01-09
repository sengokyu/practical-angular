# @practical-angular/local-storage

LocalStorage support for Angular.

## Usage

Import LocalStorageModule to a module.

```diff
+ import { LocalStorageModule } from '@practical-angular/local-storage';

  @NgModule({
-   imports: [BrowserModule],
+   imports: [BrowserModule, LocalStorageModule],
  })
```

Inject the service to a component.

```diff
+ import { LocalStorageService } from '@practical-angular/local-storage';

  export class YourComponent {
-   constructor() {}
+   constructor(private localStorageService: LocalStorageService) {}
  }
```

Call Set / Get / Remove Clear method.

```ts
// Set item.
this.localStorageService.setItem(key, value);

// Get item
const value = this.localStorageService.getItem(key);

// Remove item
this.localStorageService.removeItem(key);

// Clear storage
this.localStorageService.clear();
```
