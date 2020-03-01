import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 99vh;
  justify-content: center;
  align-items: center;
`;

const MeanningfulMessage = styled.span`
  display: inline-block;
  font-family: 'Courier New', Courier, monospace;
  font-size: 22px;
  font-weight: 500;
`;

export default function LoadingState() {
  return (
    <LoadingWrapper>
      <MeanningfulMessage>This is a very beautiful loading screen on future..</MeanningfulMessage>
    </LoadingWrapper>
  );
}
