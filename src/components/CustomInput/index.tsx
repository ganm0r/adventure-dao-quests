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
  border-radius: 0px 6px 6px 0px;
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

const StyledCustomInputField = styled.input`
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  border-radius: 6px 0px 0px 6px;
  background-color: ${colors.lightGray};
  border-color: ${colors.lightGray};
  font-size: 18px;
  color: ${colors.darkGray};
  margin-bottom: 3.5%;
  pointer-events: none;
  text-align: center;
  padding: 16px;
  padding-left: 0;
  padding-right: 0;
`;

const StyledSpan = styled.span`
  font-size: 18px;
  margin: 0;
  margin-bottom: 12px;
  color: ${colors.darkGray};
`;

interface CustomInputProps {
  title: string;
  url: string;
  optional: boolean;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  value: string | number;
}

function CustomInput({
  title,
  url,
  optional,
  type,
  placeholder,
  required,
  onChange,
  id,
  name,
  value,
}: CustomInputProps): JSX.Element {
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
      <Grid
        style={{
          gridTemplateColumns: '1fr 2fr',
          margin: '0',
          padding: '0',
        }}
      >
        <StyledCustomInputField placeholder={url} />
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
    </Grid>
  );
}

export default CustomInput;
