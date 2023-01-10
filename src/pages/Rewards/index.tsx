import React, { useState } from 'react';
import Button from 'components/Button';
import styled from 'styled-components';
import colors from 'theme/constants/colors';
import typography from 'theme/constants/typography';
import { RiUserFill, RiTeamFill } from 'react-icons/ri';

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

const Form = styled.form`
  display: grid;
  position: relative;
  grid-template-rows: repeat(3, 0.5fr);
`;

const StyledLabel = styled.label`
  padding: 32px 16px 32px 16px;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  display: inline-block;
`;
const StyledOption = styled.div`
  display: inline;
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

function Rewards(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState('FCFS');

  const EntriesOptions = [
    {
      icon: '1',
      title: 'FCFS',
      desc: 'First come, first served principle, whoever completes the Quest first gets the reward first',
    },
    {
      icon: 'N',
      title: 'Lucky Draw',
      desc: 'When the Quest time expires, the users who can get the reward will be randomly drawn',
    },
  ];

  function onOptionChange(selected) {
    setSelectedOption(selected);
  }

  const onSubmit = event => {
    event.preventDefault();
  };

  return (
    <Grid
      style={{
        gridTemplateRows: '1fr 2fr',
      }}
    >
      <Flex>
        <Heading>Rewards</Heading>
        <SubHeading>Select a Rewards Method</SubHeading>
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
              {option.icon === '1' ? (
                <>
                  {selectedOption === 'For myself' ? (
                    <RiUserFill size="28px" color={colors.purple} />
                  ) : (
                    <RiUserFill size="28px" color={colors.black} />
                  )}
                </>
              ) : (
                <>
                  {selectedOption === 'With my team' ? (
                    <RiTeamFill size="28px" color={colors.purple} />
                  ) : (
                    <RiTeamFill size="28px" color={colors.black} />
                  )}
                </>
              )}
              <Heading
                style={{
                  fontSize: '18px',
                  marginLeft: '0',
                }}
              >
                {option.title}
              </Heading>
              <SubHeading
                style={{
                  fontSize: '18px',
                  marginLeft: '0',
                  color: `${colors.darkGray}`,
                }}
              >
                {option.desc}
              </SubHeading>
            </StyledLabel>
          </StyledOption>
        ))}
      </Flex>
      <Form onSubmit={onSubmit}>
        <Button marginTop="2%" type="submit">
          Save Settings
        </Button>
      </Form>
    </Grid>
  );
}

export default Rewards;
