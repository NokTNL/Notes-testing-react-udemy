import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EntryPage } from "../EntryPage";

test("update scoop subtotal when scoops changes", async () => {
  const user = userEvent.setup();
  render(<EntryPage />);
  expect(screen.getByText(/Scoops total: \$/i)).toHaveTextContent(/0\.00/);

  // get the FIRST spin button
  const firstScoopInput = (await screen.findAllByRole("spinbutton"))[0];
  await user.type(firstScoopInput, "2");
  expect(screen.getByText(/Scoops total: \$/i)).toHaveTextContent(/4\.00/); // $2 each

  const secondScoopInput = (await screen.findAllByRole("spinbutton"))[1];
  await user.type(secondScoopInput, "3");
  expect(screen.getByText(/Scoops total: \$/i)).toHaveTextContent(/10\.00/);
});
