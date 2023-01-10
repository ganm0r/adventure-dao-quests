import React from 'react';
import styled from 'styled-components';
import colors from 'theme/constants/colors';

const StyledButton = styled.button`
  background-color: ${colors.purple};
  font-size: 18px;
  box-sizing: border-box;
  color: ${colors.white};
  padding: 16px;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transfrom: scale(0.98);
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  marginTop: string;
  onClick?: () => void;
}

function Button({ children, type, marginTop, onClick }: ButtonProps): JSX.Element {
  return (
    <StyledButton style={{ marginTop: `${marginTop}` }} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
