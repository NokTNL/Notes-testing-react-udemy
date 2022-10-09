import { Item } from "./Item";
import styled from "styled-components";
import { useEntryPageContext } from "./EntryPageContext";

const ItemsContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ToppingOptions = () => {
  const [entryState, entryDispatch] = useEntryPageContext();
  const toppingOptions = entryState.options.toppings;
  const toppingsCounts = entryState.entries.toppings;
  const hasError = entryState.options.hasError;

  const handleItemCountChange = (targetName: string, newCount: number) => {
    entryDispatch({
      type: "CHANGE_TOPPINGS_COUNT",
      payload: { name: targetName, count: newCount },
    });
  };

  return (
    <section>
      <h3>Toppings</h3>
      {hasError ? (
        // Note that text inside <div> is NOT accessible as the "name"
        <div role="alert">
          An unexpected error occured. Please try again later.
        </div>
      ) : (
        <>
          <p>$1.50 each</p>
          <p>
            Toppings total: $
            {(
              Array.from(toppingsCounts).reduce(
                (total, item) => total + item[1],
                0
              ) * 1.5
            ) // $1.5 each
              .toFixed(2)}
          </p>
          <ItemsContainer>
            {toppingOptions.map((item) => (
              <Item
                key={item.name}
                item={item}
                itemText="toppings"
                handleItemCountChange={handleItemCountChange}
              />
            ))}
          </ItemsContainer>
        </>
      )}
    </section>
  );
};
