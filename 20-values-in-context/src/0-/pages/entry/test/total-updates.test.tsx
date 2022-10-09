import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EntryPage } from "../EntryPage";

describe("totals update correctly", () => {
  test("update scoop subtotal when scoops changes", async () => {
    const user = userEvent.setup();
    render(<EntryPage />);
    expect(screen.getByText(/Scoops total: \$/i)).toHaveTextContent(/0\.00/);

    // get the FIRST spin button
    const chocolateScoopsInput = await screen.findByLabelText(
      /number of chocolate items/i
    );
    await user.type(chocolateScoopsInput, "2");
    expect(screen.getByText(/Scoops total: \$/i)).toHaveTextContent(/4\.00/); // $2 each

    const vanillaScoopsInput = await screen.findByLabelText(
      /number of vanilla items/i
    );
    await user.type(vanillaScoopsInput, "3");
    expect(screen.getByText(/Scoops total: \$/i)).toHaveTextContent(/10\.00/);
  });

  test("update toppings subtotal when toppings changes", async () => {
    const user = userEvent.setup();
    render(<EntryPage />);
    expect(screen.getByText(/Toppings total: \$/i)).toHaveTextContent(/0\.00/);

    // get the FIRST spin button
    const cherriesToppingsInput = await screen.findByLabelText(
      /number of Cherries items/i
    );
    await user.type(cherriesToppingsInput, "2");
    expect(screen.getByText(/Toppings total: \$/i)).toHaveTextContent(/3\.00/); // $1.5 each

    const mmsToppingsInput = await screen.findByLabelText(
      /number of M&Ms items/i
    );
    await user.type(mmsToppingsInput, "3");
    expect(screen.getByText(/Toppings total: \$/i)).toHaveTextContent(/7\.50/);
  });
});
