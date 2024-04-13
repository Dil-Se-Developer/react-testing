# MSW

- Real Api are primarily used only for end-to-end tests and not for unit or funtional tests for one we don't have to ensure the server is up and running to test whether the component renders as intended.

- These tests are run quite often it is not feasible to include real API which may even charge you based on the number of requests what we have to do instead is mock the http requests in our test we mock the response to the request with a list of users or an error.
