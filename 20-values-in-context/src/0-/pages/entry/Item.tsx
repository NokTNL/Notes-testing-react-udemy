import styled from "styled-components";
import { EntryOptionItem } from "./types";
import { BASE_URL } from "../../constants/api";

const StyledImg = styled.img`
  height: 100px;
`;

type PropType = {
  item: EntryOptionItem;
  itemText: string;
  // count: number;
  // handleOptionCountChange: (targetName: string, newCount: number) => void;
};

export const Item = ({
  item /* count, handleOptionCountChange  */,
  itemText,
}: PropType) => {
  return (
    <li>
      <StyledImg
        src={`${BASE_URL}${item.imagePath}`}
        alt={`${item.name} ${itemText}`}
      />
      <p>
        {item.name}{" "}
        <input
          type="number"
          // value={count}
          // onChange={(e) => {
          //   handleOptionCountChange(item.name, parseInt(e.target.value));
          // }}
        />
      </p>
    </li>
  );
};
