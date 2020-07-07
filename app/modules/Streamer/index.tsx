import React from 'react';
import Searcher from './Searcher';
import Result from './Result';
import Styled from './styles';

export default function Streamer() {
  // Main return
  return (
    <Styled.Container>
      <Searcher />
      <Result />
    </Styled.Container>
  );
}
