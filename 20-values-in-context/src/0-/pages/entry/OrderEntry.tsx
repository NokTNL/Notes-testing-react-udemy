import { Options } from "./Options";

export const OrderEntry = () => {
  return (
    <>
      <h3>Scoops</h3>
      <Options optionType="scoops" />
      <h3>Toppings</h3>
      <Options optionType="toppings" />
    </>
  );
};
