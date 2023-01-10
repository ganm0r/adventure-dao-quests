import React from 'react';
import styled from 'styled-components';
import colors from 'theme/constants/colors';

const Grid = styled.div`
  display: grid;
`;

const StyledInputTitle = styled.p`
  font-size: 18px;
  margin-bottom: 12px;
  color: ${colors.black};
`;

const StyledInputField = styled.input`
  border-style: solid;
  border-radius: 6px;
  border-width: 1px;
  padding: 16px;
  box-sizing: border-box;
  border-color: ${colors.lightGray};
  background-color: ${colors.white};
  font-size: 18px;
  color: ${colors.black};
  margin-bottom: 2%;

  &:focus {
    outline: none;
    border-color: ${colors.purple};
  }

  ::placeholder {
    color: ${colors.darkGray};
  }
`;

const StyledSpan = styled.span`
  font-size: 18px;
  margin-bottom: 12px;
  color: ${colors.darkGray};
`;

interface InputProps {
  title: string;
  optional: boolean;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  value: string | number;
}

function Input({
  title,
  optional,
  type,
  placeholder,
  required,
  onChange,
  id,
  name,
  value,
}: InputProps): JSX.Element {
  return (
    <Grid
      style={{
        gridTemplateRows: '0.5fr 1fr',
        alignItems: 'flex-start',
      }}
    >
      <StyledInputTitle>
        {title}
        {optional && <StyledSpan> (optional)</StyledSpan>}
      </StyledInputTitle>
      <StyledInputField
        type={type}
        placeholder={placeholder}
        spellCheck="false"
        autoComplete="off"
        required={required}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
}

export default Input;
