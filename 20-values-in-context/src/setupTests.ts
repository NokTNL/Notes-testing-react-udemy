// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

/**
 * The below is needed for jest to use our mock server intead of a real one. These code will be injected into each test file and run before our test code
 */
import { server } from "./0-/mocks/server";

// Starts the requests interception service ONCE
beforeAll(() => server.listen());

// Reset to the handlers we defined during `setupServer()`
// This will remove any handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
