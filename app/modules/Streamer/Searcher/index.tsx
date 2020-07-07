import React, { useEffect } from 'react';
import Styled from './styles';
import { useSetRecoilState } from 'recoil';
// Atoms
import { currentSearchKeywords } from './atoms';

export default function Searcher() {
  let timeOut: any;

  const setKeywords = useSetRecoilState(currentSearchKeywords);

  // Life Cyrcle

  useEffect(() => {
    return () => {
      clearTimeout(timeOut);
    };
  }, [timeOut]);

  // Event Handle Functions
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeOut);
    const value = event.target.value;
    timeOut = setTimeout(() => {
      setKeywords(value);
    }, 900);
  };

  // Main return
  return <Styled.Input onChange={handleOnChange} />;
}
