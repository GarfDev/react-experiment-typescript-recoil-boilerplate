import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ProductInitialState } from '../types';
import { detectProductHost } from '../actions';
import { tikiParser } from '../adapters';
import { productInitialState } from '../constants';
import Header from './Header';
import SearchBar from './Search';
import InfoContainer from '../components/Info';

export default function Homepage() {
  // Initial Values
  const dispatch = useDispatch();
  const [inputData, setInputData] = React.useState('');
  // Homepage States
  const [productPreview, setProductPreview] = React.useState(false);
  const [productLoading, setProductLoading] = React.useState(false);
  const [productData, setProductData] = React.useState<ProductInitialState>(productInitialState);

  // Event Handle Functions
  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setInputData((event.target as any).value);
  };

  const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setProductData(productInitialState);
    setProductLoading(true);
    setProductPreview(false);
    const callback = (response: any) => {
      const result = tikiParser(response.response);
      setProductData(result);
      setProductLoading(false);
      setProductPreview(true);
    };
    dispatch(detectProductHost(inputData, callback));
  };

  return (
    <HomepageWrapper>
      <Header />
      <SearchBar handleOnChange={handleOnChange} handleOnSubmit={handleOnsubmit} loading={productLoading} />
      <InfoContainer
        title={productData.title}
        price={productData.price}
        previewImage={productData.imgURL}
        visible={productPreview}
      />
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
