import { Item } from "./Item";
import styled from "styled-components";
import { useEntryPageContext } from "./EntryPageContext";

const ItemsContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ToppingOptions = () => {
  const [entryState] = useEntryPageContext();
  const toppingOptions = entryState.options.toppings;
  const hasError = entryState.options.hasError;

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
          {/* 🤯 the below shoudl change according to different types of options! */}
          <p>
            Toppings total: $
            {/* {(
          totalOptionCounts.reduce(
            (total, optionCount) => total + optionCount.count,
            0
          ) * 2
        ).toFixed(2)} */}
          </p>
          <ItemsContainer>
            {toppingOptions.map((item) => (
              <Item
                key={item.name}
                item={item}
                itemText="toppings"
                // count={
                //   totalOptionCounts.find((option) => option.name === item.name)
                //     ?.count ?? 0
                // }
                // handleOptionCountChange={handleOptionCountChange}
              />
            ))}
          </ItemsContainer>
        </>
      )}
    </section>
  );
};
