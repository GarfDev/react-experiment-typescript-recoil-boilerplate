import React from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import styled from 'styled-components';
import { Product } from '../types';
import { detectProductHost } from '../actions';
import { tikiParser } from '../adapters';
import { productInitialState } from '../constants';
import Header from '../components/Header';
import SearchBar from '../components/Search';
import InfoContainer from '../components/Info';
import Cards from '../components/Cards';

export default function Homepage() {
  // Initial Values
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [inputData, setInputData] = React.useState('');
  // Homepage States
  const [productPreview, setProductPreview] = React.useState(false);
  const [productLoading, setProductLoading] = React.useState(false);
  const [savedItems, setSavedItems] = React.useState<Product[] | []>([]);
  const [productData, setProductData] = React.useState<Product>(productInitialState);

  // Event Handle Functions
  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setInputData((event.target as any).value);
  };

  const handleOnClose = () => {
    setProductPreview(false);
    setProductData(productInitialState);
    setInputData('');
  };

  const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setProductData(productInitialState);
    setProductLoading(true);
    setProductPreview(false);
    const callback = (response: any) => {
      const result = tikiParser(response.response);
      setProductData({ ...result, productURL: inputData });
      setProductLoading(false);
      setProductPreview(true);
    };
    dispatch(detectProductHost(inputData, callback));
  };

  const handleOnCopy = (string: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(string).then(() => {
      addToast('Copied your link to clipboard', { appearance: 'success' });
    });
  };

  const handleOnDelete = (title: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const filteredData = savedItems.filter(item => item.title != title);
    setSavedItems(filteredData);
    localStorage.setItem('items', JSON.stringify(filteredData));
  };

  const loadSavedItems = () => {
    const savedItems = JSON.parse(localStorage.getItem('items') || '[]');
    setSavedItems(savedItems);
  };

  const handleOnSaveItems = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const currentItemList = JSON.parse(localStorage.getItem('items') || '[]');
    currentItemList.unshift(productData);
    localStorage.setItem('items', JSON.stringify(currentItemList));
    setProductPreview(false);
    setInputData('');
    addToast('Saved your item', { appearance: 'success' });
    loadSavedItems();
  };

  // ComponentDidMouth
  React.useEffect(() => {
    loadSavedItems();
  }, []);

  // Main return fucntion
  return (
    <HomepageWrapper>
      <Header titles={['Reminder']} />
      <SearchBar
        inputData={inputData}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnsubmit}
        loading={productLoading}
      />
      <InfoContainer
        title={productData.title}
        price={productData.price}
        previewImage={productData.imgURL}
        visible={productPreview}
        onSaveItems={handleOnSaveItems}
        onCancel={handleOnClose}
      />
      <Cards data={savedItems} onCopy={handleOnCopy} onDelete={handleOnDelete} />
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
