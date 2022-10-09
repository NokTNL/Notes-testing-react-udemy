import { Item } from "./Item";
import styled from "styled-components";
import { useEntryPageContext } from "./EntryPageContext";

const ItemsContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ScoopOptions = () => {
  const [entryState] = useEntryPageContext();
  const scoopsOptions = entryState.options.scoops;
  const hasError = entryState.options.hasError;

  // const handleOptionCountChange = (targetName: string, newCount: number) => {
  //   setTotalOptionCounts((prevCounts) =>
  //     prevCounts.map((option) =>
  //       option.name === targetName
  //         ? { name: option.name, count: newCount }
  //         : option
  //     )
  //   );
  // };

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
          {/* 🤯 the below shoudl change according to different types of options! */}
          <p>
            Scoops total: $
            {/* {(
          totalOptionCounts.reduce(
            (total, optionCount) => total + optionCount.count,
            0
          ) * 2
        ).toFixed(2)} */}
          </p>
          <ItemsContainer>
            {scoopsOptions.map((item) => (
              <Item
                key={item.name}
                item={item}
                itemText="scoops"
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
