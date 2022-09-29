import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import { ItemType } from "../../models/dataTypes";
import { ScoopOption } from "./ScoopOption";
import styled from "styled-components";
import { ToppingOption } from "./ToppingOption";

const StyledOptions = styled.ul`
  display: flex;
  gap: 20px;
`;

type Proptype = {
  optionType: string;
};

export const Options = ({ optionType }: Proptype) => {
  const [items, setItems] = useState([] as ItemType[]);
  const [hasErr, setErr] = useState(false);

  useEffect(() => {
    // This server call will be replaced by our msw when running test because of the settings in `setupTests.ts`
    axios
      .get(`${BASE_URL}/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        if (error instanceof Error) {
          setErr(true);
        } else {
          throw error;
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OptionComp =
    optionType === "scoops"
      ? ScoopOption
      : optionType === "toppings"
      ? ToppingOption
      : null;

  return hasErr ? (
    // Note that text inside <div> is NOT accessible as the "name"
    <div role="alert">An unexpected alert error. Please try again later.</div>
  ) : (
    <StyledOptions>
      {items.map(
        (item) => OptionComp && <OptionComp key={item.name} item={item} />
      )}
    </StyledOptions>
  );
};
