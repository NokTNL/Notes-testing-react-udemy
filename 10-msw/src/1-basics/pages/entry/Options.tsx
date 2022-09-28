import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import { ItemType } from "../../models/dataTypes";
import { ScoopOption } from "./ScoopOption";
import styled from "styled-components";

const StyledOptions = styled.ul`
  display: flex;
  gap: 20px;
`;

type Proptype = {
  optionType: string;
};

export const Options = ({ optionType }: Proptype) => {
  const [items, setItems] = useState([] as ItemType[]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/scoops`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          throw error;
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledOptions>
      {items.map((item) => (
        <ScoopOption key={item.name} item={item} />
      ))}
    </StyledOptions>
  );
};
