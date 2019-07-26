# Test Coverage Bug

### To see the issue

Clone the repo then:

```
npm install
ng test --code-coverage
```

The issue is when there is a base component that another sub component is inheriting from the sub component can't have initilized properties otherwise the injected providers are undefined. And this behavior only happens when you run `ng test --code-coverage` without coverage the tests work fine.

I've created a simple example app that demonstrates this issue. To fix the tests just change the property on `SubComponent` to be `someProperty: boolean;` instead of `someProperty: boolean = true;` and the base class injected provider will be definied.
