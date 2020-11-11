import styled, { css } from "styled-components";

const InputUnderLine = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
  font-size: ${({ theme }) => theme.normal};
  width: 100%;
  background: none;

  &::placeholder {
    color: ${({ theme }) => theme.gray5};
  }

  :focus,
  :hover {
    border-bottom-color: ${({ theme }) => theme.primaryColor};
  }
`;

const StyledInInputText = styled.div``;

export default StyledInInputText;
export { InputUnderLine };
