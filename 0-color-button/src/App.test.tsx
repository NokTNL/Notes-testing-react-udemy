import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("button is initially red, turns blue when clicked", async () => {
  render(<App />);
  const user = userEvent.setup();
  const colorButton = screen.getByRole("button", {
    name: /change to blue/i,
  }) as HTMLButtonElement;

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  await user.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent(/change to red/i);
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
