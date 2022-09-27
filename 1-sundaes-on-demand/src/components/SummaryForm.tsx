import { useState } from "react";
import styled from "styled-components";
import { TNCCheckbox } from "./TNCCheckbox";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SummaryForm = () => {
  const [isTNCChecked, setTNCChecked] = useState(false);
  const [isTNCHovered, setTNCHovered] = useState(false);
  const isButtonEnabled = isTNCChecked;
  return (
    <StyledForm>
      <TNCCheckbox
        setTNCChecked={setTNCChecked}
        setTNCHovered={setTNCHovered}
        isTNCHovered={isTNCHovered}
      />
      <button disabled={!isButtonEnabled}>Confirm Order</button>
    </StyledForm>
  );
};
