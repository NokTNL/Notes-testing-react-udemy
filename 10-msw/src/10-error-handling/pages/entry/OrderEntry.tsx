import { Options } from "./Options";

export const OrderEntry = () => {
  return (
    <>
      <h3>Choose Scoops</h3>
      <Options optionType="scoops" />
      <h3>Choose Toppings</h3>
      <Options optionType="toppings" />
    </>
  );
};
