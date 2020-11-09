import StyledIcon from "components/Icon/style";
import styled from "styled-components";

const StyledTitleBar = styled.div`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;

const Title = styled.div`
  display: grid;
  p {
    margin: 0;
    padding: 0;
  }
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${StyledIcon} {
    cursor: pointer;
  }
`;

export default StyledTitleBar;

export { Title, Action };
