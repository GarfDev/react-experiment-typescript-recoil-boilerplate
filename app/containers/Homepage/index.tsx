import React from 'react';
import styled from 'styled-components';

const HomepageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 0;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 50%;
  height: 40px;
`;

export default function Homepage() {
  return <HomepageWrapper>This route working</HomepageWrapper>;
}
