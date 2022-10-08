import styled from "styled-components";
import { ItemType } from "../../models/dataTypes";
import { BASE_URL } from "../../constants/api";

const StyledImg = styled.img`
  height: 100px;
`;

type PropType = {
  item: ItemType;
};

export const ToppingOption = ({ item }: PropType) => {
  return (
    <li>
      <StyledImg
        src={`${BASE_URL}${item.imagePath}`}
        alt={`${item.name} topping`}
      />
      <p>{item.name}</p>
    </li>
  );
};
