import styled from "styled-components";
import { EntryOptionItem } from "./types";
import { BASE_URL } from "../../constants/api";

type PropType = {
  item: EntryOptionItem;
  itemText: string;
  handleItemCountChange: (targetName: string, newCount: number) => void;
};

const StyledImg = styled.img`
  height: 150px;
  object-fit: contain;
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Item = ({ item, itemText, handleItemCountChange }: PropType) => {
  return (
    <StyledItem>
      <StyledImg
        src={`${BASE_URL}${item.imagePath}`}
        alt={`${item.name} ${itemText}`}
      />
      <p>{item.name}</p>
      <label>
        <span
          style={{ display: "none" }}
        >{`number of ${item.name} items`}</span>
        <input
          type="number"
          min={0}
          step={1}
          defaultValue={0}
          onChange={(e) => {
            const newCount = parseInt(e.target.value);
            if (isNaN(newCount) || newCount < 0) return;
            handleItemCountChange(item.name, newCount);
          }}
        />
      </label>
    </StyledItem>
  );
};
