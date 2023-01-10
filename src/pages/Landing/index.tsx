import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'theme/constants/colors';
import typography from 'theme/constants/typography';

import Button from 'components/Button';

const Heading = styled.h1`
  margin: 12px;
  font-size: 72px;
  font-weight: ${typography.fontWeights.bold};
`;

const SubHeading = styled.h3`
  margin: 0;
  font-size: 48px;
  font-weight: ${typography.fontWeights.semibold};
  color: ${colors.darkGray};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 600px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <Flex>
                <img src={require("../../images/eden-logo.png")} alt="eden-logo" height={72} style={{ marginTop: '4px' }} />
                <Heading>
                    Welcome to Adventure DAO Quests
                </Heading>
            </Flex>
            <SubHeading>Create and participate in Quests</SubHeading>
            <Grid>
                <Button type='button' marginTop='8%' onClick={() => navigate('/quests')}>Launch Quests</Button>
                <Button type='button' marginTop='8%' onClick={() => navigate('/create')}>Create Quests</Button>
            </Grid>
        </div>
    )
}

export default Landing