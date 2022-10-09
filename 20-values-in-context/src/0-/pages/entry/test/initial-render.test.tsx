import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { BASE_URL } from "../../../constants/api";
import { server } from "../../../mocks/server";
import { EntryPage } from "../EntryPage";

describe("Render all options available from server", () => {
  test("displays image for each scoop", async () => {
    /**
     * Whenever we render the component in our test, it gets data from our msw
     */
    render(<EntryPage />);

    // This will find images according to their 'alt' text
    const scoopImages: HTMLImageElement[] = await screen.findAllByRole("img", {
      name: /scoops$/i,
    });
    // Assert on number of images
    expect(scoopImages).toHaveLength(2);

    // Assert on alt text content
    const altTexts = scoopImages.map((img) => img.alt);
    expect(altTexts).toEqual(["Chocolate scoops", "Vanilla scoops"]);
  });

  test("displays image for each topping", async () => {
    render(<EntryPage />);

    // This will find images according to their 'alt' text
    const toppingImages: HTMLImageElement[] = await screen.findAllByRole(
      "img",
      {
        name: /toppings$/i,
      }
    );

    // Assert on number of images
    expect(toppingImages).toHaveLength(3);

    // Assert on alt text content
    const altTexts = toppingImages.map((img) => img.alt);
    expect(altTexts).toEqual([
      "Cherries toppings",
      "M&Ms toppings",
      "Hot fudge toppings",
    ]);
  });

  test("handles errors from scoops and toppings routes", async () => {
    server.use(
      rest.get(`${BASE_URL}/scoops`, (req, res, ctx) => res(ctx.status(500))),
      rest.get(`${BASE_URL}/toppings`, (req, res, ctx) => res(ctx.status(500)))
    );

    render(<EntryPage />);

    // Since there are two API calls, findAllByRole will let it pass already after the first call (showing 1 alert), then the assertion below will fail
    // Wrap the whole thing into `waitFor` so that it waits until the ASSERTION ITSELF doesn't throw
    await waitFor(async () => {
      const alertTexts = await screen.findAllByText(
        /An unexpected error occured. Please try again later./i
      );
      expect(alertTexts).toHaveLength(2);
    });
  });
});
