import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ProductInitialState } from '../types';
import { detectProductHost } from '../actions';
import { tikiParser } from '../adapters';
import { productInitialState } from '../constants';
import Header from './Header';
import SearchBar from './Search';
import InfoContainer from './Info';

export default function Homepage() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = React.useState('');
  const [productData, setProductData] = React.useState<ProductInitialState>(productInitialState);

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setInputData((event.target as any).value);
  };

  const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const callback = (response: any) => {
      const result = tikiParser(response.response);
      setProductData(result);
    };
    dispatch(detectProductHost(inputData, callback));
  };

  return (
    <HomepageWrapper>
      <Header />
      <SearchBar handleOnChange={handleOnChange} handleOnSubmit={handleOnsubmit} />
      {productData.title && (
        <InfoContainer title={productData.title} price={productData.price} imgURL={productData.imgURL} />
      )}
    </HomepageWrapper>
  );
}

const HomepageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
