import React, { useState } from 'react';
import styled from 'styled-components';
import typography from 'theme/constants/typography';
import colors from 'theme/constants/colors';

import Input from 'components/Input';
import Button from 'components/Button';

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

interface SetUpProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

function SetUp({ setActiveStep }: SetUpProps): JSX.Element {
  const [formData, setFormData] = useState({
    qname: '',
    desc: '',
    starts: '',
    ends: ''
  });

  const { qname, desc, starts, ends } = formData;

  const onChange = event => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();

    setActiveStep(1);
  };

  return (
    <Grid
      style={{
        gridTemplateRows: '1fr 2fr',
      }}
    >
      <Flex>
        <Heading>Set Up</Heading>
        <SubHeading>Please add you quest details here</SubHeading>
      </Flex>
      <Form onSubmit={onSubmit}>
        <Input
          title="Quest Name"
          type="text"
          optional={false}
          placeholder="ETH Quest"
          required
          id="qname"
          name="qname"
          value={qname}
          onChange={onChange}
        />
        <Input
          title="Quest Description"
          optional={false}
          type="text"
          placeholder="Quest on Ethereum"
          required
          id="desc"
          name="desc"
          value={desc}
          onChange={onChange}
        />
        <div style={{ display: "flex", flexDirection: 'column' }}>
          <Input
            title="Starts"
            optional={false}
            type="time"
            placeholder="Start date"
            required
            id="starts"
            name="starts"
            value={starts}
            onChange={onChange}
          />
          <Input
            title="Ends"
            optional={false}
            type="time"
            placeholder="End date"
            required
            id="ends"
            name="ends"
            value={ends}
            onChange={onChange}
          />
        </div>
        <Button marginTop="1.35%" type="submit">
          Save Quest Details
        </Button>
      </Form>
    </Grid>
  );
}

export default SetUp;
