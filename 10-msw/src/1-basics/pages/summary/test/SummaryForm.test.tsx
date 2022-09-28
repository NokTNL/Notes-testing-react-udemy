import { render, screen } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("'Confirm' button should be disabled initially", () => {
  render(<SummaryForm />);

  // const checkbox = screen.getByLabelText(/i agree to terms and conditions/i);
  const confirmBtn = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmBtn).toBeDisabled();
});

test("Checkbox enables 'Confirm' button on first click, disables button again on second click", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByLabelText(/terms and conditions/i);
  const confirmBtn = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkbox);
  expect(confirmBtn).toBeEnabled();
  await user.click(checkbox);
  expect(confirmBtn).toBeDisabled();
});

test("Popover appears when hovering Terms & Conditions", async () => {
  // Initially not in the document
  const user = userEvent.setup();
  render(<SummaryForm />);

  expect(
    screen.queryByText(/no ice cream will actually be delivered/i)
  ).not.toBeInTheDocument();

  // Appears when hovered
  const termsAndConditionsText = screen.getByRole("link", {
    name: /terms and conditions/i,
  });
  await user.hover(termsAndConditionsText);

  expect(
    screen.getByText(/no ice cream will actually be delivered/i)
  ).toBeVisible();

  // Disappears when unhovered
  await user.unhover(termsAndConditionsText);
  expect(
    screen.queryByText(/no ice cream will actually be delivered/i)
  ).not.toBeInTheDocument();
});
