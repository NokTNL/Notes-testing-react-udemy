import { EntryPageProvider } from "./EntryPageContext";
import { ScoopOptions } from "./ScoopOptions";
import { ToppingOptions } from "./ToppingOptions";

export const EntryPage = () => {
  return (
    <EntryPageProvider>
      <h1>Design Your Sundae!</h1>
      <ScoopOptions />
      <ToppingOptions />
    </EntryPageProvider>
  );
};
