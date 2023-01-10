import React, { useState } from 'react';
import styled from 'styled-components';
import typography from 'theme/constants/typography';
import colors from 'theme/constants/colors';

import Button from 'components/Button';
import Input from 'components/Input';

const Heading = styled.h1`
  margin: 12px;
  font-size: 38px;
  font-weight: ${typography.fontWeights.bold};
`;

const SubHeading = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: ${typography.fontWeights.regular};
  color: ${colors.darkGray};
`;

const Grid = styled.div`
  display: grid;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StyledOption = styled.div`
  display: block;
`;

const StyledRadio = styled.input`
  display: none;
  z-index: -1;

  &:checked + label {
    border-color: ${colors.purple};
    backgroud-color: ${colors.white};
    color: ${colors.black};
  }
`;

const StyledLabel = styled.label`
  padding: 8px 8px 8px 16px;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  display: inline-block;
`;

const Form = styled.form`
  display: grid;
`;

interface EntriesProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

function Entries({ setActiveStep }: EntriesProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState('Twitter');
  const [formData, setFormData] = useState({
    value: ''
  });

  function onOptionChange(selected) {
    setSelectedOption(selected);
  }

  const { value } = formData;

  const onChange = event => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();

    setActiveStep(2);
  };

  const EntriesOptions = [
    {
      title: 'Twitter',
      tasks: [
        {
          desc: "Like a tweet on Twitter",
          placeholder: "Enter tweet URL"
        },
        {
          desc: "Retweet a tweet on Twitter",
          placeholder: "Enter tweet URL"
        },
        {
          desc: "Follow on Twitter",
          placeholder: "Enter Twitter username"
        },
      ],
    },
    {
      title: 'Discord',
      tasks: [
        {
          desc: "Join a Discord server",
          placeholder: "Enter Discord server's URL"
        },
      ],
    },
    {
      title: 'Telegram',
      tasks: [
        {
          desc: "Join a channel on Telegram",
          placeholder: "Enter Telegram channel URL"
        },
      ],
    },
  ];

  return (
    <Grid
      style={{
        gridTemplateRows: '1fr 2fr',
        paddingTop: '10px',
      }}
    >
      <Flex>
        <Heading>Choose a template</Heading>
        <SubHeading>Please choose from off-chain and on-chain templates</SubHeading>
      </Flex>
      <Flex
        style={{
          flexDirection: 'row',
          gap: '24px',
          justifyContent: 'center',
          padding: '22px',
          paddingLeft: '124px',
          paddingRight: '124px',
        }}
      >
        {EntriesOptions.map(option => (
          <StyledOption key={option.title}>
            <StyledRadio
              type="radio"
              id={option.title}
              checked={selectedOption === option.title}
              onChange={() => {
                onOptionChange(option.title);
              }}
            />
            <StyledLabel htmlFor={option.title}>
              <Heading
                style={{
                  fontSize: '18px',
                  marginLeft: '0',
                }}
              >
                {option.title}
              </Heading>
            </StyledLabel>
          </StyledOption>
        ))}
      </Flex>
      <div>
        {EntriesOptions.map(option => (
          option.tasks.map(task => (
            <div key={task.desc} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <Input
                title=''
                type='text'
                optional={false}
                placeholder={task.placeholder}
                required={false}
                onChange={onChange}
                id="data"
                name="data"
                value={value}
              />
              <Button marginTop='8%' type='button'>{task.desc}</Button>
            </div>
          ))
        ))}
      </div>
      <Form onSubmit={onSubmit}>
        <Button marginTop="12%" type="submit">
          Save Settings
        </Button>
      </Form>
    </Grid>
  );
}

export default Entries;
