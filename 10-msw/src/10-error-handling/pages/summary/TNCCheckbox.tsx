import styled from "styled-components";

const StyledTNCContent = styled.span`
  position: absolute;
  margin-left: 10px;
  border: 1px solid black;
  padding: 3px;
  border-radius: 3px;
`;
const TNCContent = () => (
  <StyledTNCContent>No ice cream will actually be delivered!</StyledTNCContent>
);

type PropType = {
  setTNCChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setTNCHovered: React.Dispatch<React.SetStateAction<boolean>>;
  isTNCHovered: boolean;
};

export const TNCCheckbox = ({
  setTNCChecked,
  setTNCHovered,
  isTNCHovered,
}: PropType) => {
  return (
    <label>
      <input
        type="checkbox"
        onClick={() => {
          setTNCChecked((p) => !p);
        }}
      />
      <span>
        I agree to{" "}
        <a
          href="#"
          onMouseEnter={() => {
            setTNCHovered(true);
          }}
          onMouseLeave={() => {
            setTNCHovered(false);
          }}
        >
          Terms and Conditions
        </a>
        {isTNCHovered && <TNCContent />}
      </span>
    </label>
  );
};
