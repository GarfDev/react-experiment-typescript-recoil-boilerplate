import React from 'react';
import { useRecoilValue } from 'recoil';
import Styled from './styles';
import { searchMusic } from '../Searcher/selectors';

export default function Result() {
  const searchResponse = useRecoilValue(searchMusic);
  // console.log(searchResponse);
  return (
    <Styled.ResultContainer>
      {searchResponse.map((item: any, index: string) => (
        <Styled.Result backgroundImg={item.music_cover} key={index} />
      ))}
    </Styled.ResultContainer>
  );
}
