import { render, screen } from "@testing-library/react";
import { Options } from "../Options";

test("displays image for each scoop", async () => {
  render(<Options optionType="scoops" />);

  // This will find images according to their 'alt' text
  const scoopImages: HTMLImageElement[] = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });
  // Assert on number of images
  expect(scoopImages).toHaveLength(2);

  // Assert on alt text content
  const altTexts = scoopImages.map((img) => img.alt);
  expect(altTexts).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping", async () => {
  render(<Options optionType="toppings" />);

  // This will find images according to their 'alt' text
  const toppingImages: HTMLImageElement[] = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  // Assert on number of images
  expect(toppingImages).toHaveLength(3);

  // Assert on alt text content
  const altTexts = toppingImages.map((img) => img.alt);
  expect(altTexts).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
