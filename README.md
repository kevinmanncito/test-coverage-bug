# Test Coverage Bug

### To see the issue

Clone the repo then:

```
npm install
ng test --code-coverage
```

The issue is when there is a base component that another sub component is inheriting from the sub component can't have initilized properties otherwise the injected providers are undefined. And this behavior only happens when you run `ng test --code-coverage` without coverage the tests work fine.

I've created a simple example app that demonstrates this issue. To fix the tests just change the property on `SubComponent` to be `someProperty: boolean;` instead of `someProperty: boolean = true;` and the base class injected provider will be definied.

I've also made an `angular-7` branch and on this branch the issue happens in the browser and running the tests without code coverage. So it seems to be improved with angular 8 ironically we discovered the issue by upgrading to angular 8. Not really sure this is a typescript issue or an angular issue or something else.
