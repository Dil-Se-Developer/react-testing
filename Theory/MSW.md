# MSW

- Real Api are primarily used only for end-to-end tests and not for unit or funtional tests for one we don't have to ensure the server is up and running to test whether the component renders as intended.

- These tests are run quite often it is not feasible to include real API which may even charge you based on the number of requests what we have to do instead is mock the http requests in our test we mock the response to the request with a list of users or an error.

## Configure Server

```
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
```

## Setup

```
import { server } from "./mocks/server";
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
```
