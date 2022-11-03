# @practical-angular/http-loading-indicator

This library provide a http interceptor and a directive.

When HttpClient is working, show/hide your specific element automatically.

## Getting started

Install package.

```console
npm i @practical-angular/http-loading-indicator
```

Update app.module.ts as follows.

```ts
import {
  HttpLoadingIndicatorModule,
  HTTP_LOADING_INDICATOR_INTERCEPTOR_PROVIDERS,
} from "http-loading-indicator";

@NgModule({
  imports: [HttpLoadingIndicatorModule],
  providers: [HTTP_LOADING_INDICATOR_INTERCEPTOR_PROVIDERS],
})
export class AppModule {}
```

Update your component (typically app.component.ts) where you want to show loading indicator.

```html
<div praHttpLoadingIndicator>
  <div><img src="loading-animation.gif" /></div>
</div>
```

Please see a sample as you like.
