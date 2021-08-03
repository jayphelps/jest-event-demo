# jest-event-demo

```
nvm use 16 # at least 15.4+
npm install
npx jest

 FAIL  ./event.test.js
  ● Test suite failed to run

    ReferenceError: Event is not defined

      1 | // use it somehow
    > 2 | Event;
        | ^
      3 | // ReferenceError: Event is not defined

      at Object.<anonymous> (setupJest.js:2:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.126 s
Ran all test suites.
```

Or if you comment out or remove the setupJest.js you'll find the `event.test.js` tests fail because `typeof Event` and `typeof EventTarget` are both undefined.
