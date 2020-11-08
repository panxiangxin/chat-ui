import styled from "styled-components";

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : "")};
    ${({ opacity }) => (opacity ? `opacity: ${opacity}` : "")};
  }
`;

export default StyledIcon;
