import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { BASE_URL } from "../../../constants/api";
import { OrderEntry } from "../OrderEntry";

// We want to simulate when the images inside OrderEntry (which constitutes of <Options>'s) cannot be fetched from the server

test("handles errors from scooping and topping routes", async () => {
  // When we spinned up our serve using `setupServer`, we defined our default set of handlers
  // However, we can override it during test runtime:
  //   - `server.use(<...handlers>)` will ADD TO our existing handlers, or REPLACE handlers if the same handler already exists
  //   - `server.resetHandlers(<...handlers>)` will WIPE OUT all the pre-defined handlers
  //     - NOTE THAT `server.resetHanlders()` without arguments will simply revert to the pre-defined handlers, as what we did in `setupTests.ts`
  server.use(
    rest.get(`${BASE_URL}/scoops`, (req, res, ctx) =>
      res(
        // Mutates the status code to 500 (the "generic" internal server error)
        ctx.status(500)
      )
    ),
    rest.get(`${BASE_URL}/toppings`, (req, res, ctx) => res(ctx.status(500)))
  );

  render(<OrderEntry />);

  // Since there are two API calls, findAllByRole will let it pass already after the first call (showing 1 alert), then the assertion below will fail
  // Wrap the whole thing into `waitFor` so that it waits until the ASSERTION ITSELF doesn't throw
  await waitFor(async () => {
    const alertTexts = await screen.findAllByText(
      /An unexpected alert error. Please try again later./i
    );
    expect(alertTexts).toHaveLength(2);
  });
});
