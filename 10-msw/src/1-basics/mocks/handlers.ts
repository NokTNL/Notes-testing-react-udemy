// This file defines the interanl behaviour of our mock server

// Import the 'rest' object for creating REST request handlers
import { rest } from "msw";
import { BASE_URL } from "../utils/api";

// `handlers` is an array of request handlers
export const handlers = [
  // `rest.get()` returns a handler for GET requests; `rest` has methods for all the HTTP verbs
  // `rest.*()` methods take in two areguments:
  // - 1st argument: the request URL/endpoint
  // - 2nd argument is a callback you pass in called the RESPONSE RESOLVER; takes three arguments:
  //    - `request` is an OBJECT that stores the request info captured by msw, almost identical to the `Request` object produced by the fetch API
  //    - `response` is a FUNCTION that CREATES a mocked response object to be returned by the callback. The object will be identical to the `Response` object returned from the `fetch()` API (wrapped inside a Promise)
  //    - `context` contains a group of methods called RESPONSE TRANSFORMER that mutates the Response returned by our second `response` paramter
  rest.get(`${BASE_URL}/scoops`, (req, res, ctx) => {
    // res() takes in a list of EXECUTED transformers as arguments
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
      ])
    );
  }),
];
