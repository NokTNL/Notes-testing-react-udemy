import { Item } from "./Item";
import styled from "styled-components";
import { useEntryPageContext } from "./EntryPageContext";

const ItemsContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ScoopOptions = () => {
  const [entryState, entryDispatch] = useEntryPageContext();
  const scoopsOptions = entryState.options.scoops;
  const scoopsCounts = entryState.entries.scoops;
  const hasError = entryState.options.hasError;

  const handleItemCountChange = (targetName: string, newCount: number) => {
    entryDispatch({
      type: "CHANGE_SCOOPS_COUNT",
      payload: { name: targetName, count: newCount },
    });
  };

  return (
    <section>
      <h3>Scoops</h3>
      {hasError ? (
        <div role="alert">
          An unexpected error occured. Please try again later.
        </div>
      ) : (
        <>
          <p>$2.00 each</p>
          <p>
            Scoops total: $
            {(
              Array.from(scoopsCounts).reduce(
                (total, item) => total + item[1],
                0
              ) * 2
            ) // $2 each
              .toFixed(2)}
          </p>
          <ItemsContainer>
            {scoopsOptions.map((item) => (
              <Item
                key={item.name}
                item={item}
                handleItemCountChange={handleItemCountChange}
                itemText="scoops"
              />
            ))}
          </ItemsContainer>
        </>
      )}
    </section>
  );
};
