import styled from "styled-components";
import { ItemType } from "../../models/dataTypes";
import { BASE_URL } from "../../utils/api";

const StyledImg = styled.img`
  height: 100px;
`;

type PropType = {
  item: ItemType;
};

export const ScoopOption = ({ item }: PropType) => {
  return (
    <li>
      <StyledImg
        src={`${BASE_URL}/${item.imagePath}`}
        alt={`${item.name} scoop`}
      />
      <p>{item.name}</p>
    </li>
  );
};
