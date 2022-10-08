import styled from "styled-components";
import { ItemType } from "../../models/dataTypes";
import { BASE_URL } from "../../constants/api";

const StyledImg = styled.img`
  height: 100px;
`;

type PropType = {
  item: ItemType;
  count: number;
  handleOptionCountChange: (targetName: string, newCount: number) => void;
};

export const ScoopOption = ({
  item,
  count,
  handleOptionCountChange,
}: PropType) => {
  return (
    <li>
      <StyledImg
        src={`${BASE_URL}${item.imagePath}`}
        alt={`${item.name} scoop`}
      />
      <p>
        {item.name}{" "}
        <input
          type="number"
          value={count}
          onChange={(e) => {
            handleOptionCountChange(item.name, parseInt(e.target.value));
          }}
        />
      </p>
    </li>
  );
};
