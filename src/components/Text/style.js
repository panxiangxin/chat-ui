import styled, { css } from "styled-components";

const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,

  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
};

const sizeTypeVariants = {
  xxsmall: css`
    ${({ theme }) => theme.xxsmall}
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall}
  `,
  small: css`
    ${({ theme }) => theme.small}
  `,
  nomal: css`
    ${({ theme }) => theme.nomal}
  `,
  memium: css`
    ${({ theme }) => theme.memium}
  `,
  large: css`
    ${({ theme }) => theme.large}
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge}
  `,
  xxlarge: css`
    ${({ theme }) => theme.xxlarge}
  `,
};

const StyledText = styled.span`
  font-size: ${({ size }) => sizeTypeVariants[size] || sizeTypeVariants.nomal};
  ${({ type }) => typeVariants[type]};
  ${({ bold }) => bold && `font-weight: 500`};
`;

export default StyledText;
