import React, { useState } from 'react';
import styled from 'styled-components';

import { Stepper, Step } from 'react-form-stepper';

import colors from 'theme/constants/colors';
import typography from 'theme/constants/typography';

import Setup from 'pages/Setup';
import Entries from 'pages/Entries';
import Eligibility from 'pages/Eligibility';
import Rewards from 'pages/Rewards';

const Grid = styled.div`
  display: grid;
`;

const Flex = styled.div`
  display: flex;
`;

const Heading = styled.h1`
  margin: 0;
`;

const StyledDiv = styled.div`
  margin: 0;
`;

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Grid
      style={{
        gridTemplateRows: 'repeat(1fr, 2) 2fr 3fr',
        gap: '64px',
        width: 'max-content',
      }}
    >
      <Flex
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          margin: '0',
          gap: '16px',
        }}
      >
        <img
          src={require('../../images/eden-logo.png')}
          alt="eden-logo"
          height={36}
          style={{ marginTop: '4px' }}
        />
        <Heading
          style={{
            fontSize: '36px',
          }}
        >
          Create a Quest
        </Heading>
      </Flex>
      <Stepper
        activeStep={activeStep}
        connectorStateColors
        styleConfig={{
          activeBgColor: `${colors.purple}`,
          activeTextColor: `${colors.white}`,
          inactiveBgColor: `${colors.lightGray}`,
          inactiveTextColor: `${colors.darkGray}`,
          completedBgColor: `${colors.purple}`,
          completedTextColor: `${colors.white}`,
          size: '3em',
          circleFontSize: '18px',
          labelFontSize: '0px',
          borderRadius: '50%',
          fontWeight: `${typography.fontWeights.bold}`,
        }}
        connectorStyleConfig={{
          activeColor: `${colors.purple}`,
          disabledColor: `${colors.lightGray}`,
          completedColor: `${colors.purple}`,
          size: '2px',
          style: 'solid',
        }}
      >
        <Step label="Set Up" onClick={() => setActiveStep(0)} />
        <Step label="Entries" onClick={() => setActiveStep(1)} />
        <Step label="Eligibility" onClick={() => setActiveStep(2)} />
        <Step label="Reward" onClick={() => setActiveStep(3)} />
      </Stepper>
      <StyledDiv
        style={{
          width: '676px',
          height: '500px',
        }}
      >
        {activeStep === 0 && <Setup setActiveStep={setActiveStep} />}
        {activeStep === 1 && <Entries setActiveStep={setActiveStep} />}
        {activeStep === 2 && <Eligibility setActiveStep={setActiveStep} />}
        {activeStep === 3 && <Rewards />}
      </StyledDiv>
    </Grid>
  );
};

export default Create;
