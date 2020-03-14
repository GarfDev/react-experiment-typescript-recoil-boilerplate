import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTikiProduct } from './actions';
import styled from 'styled-components';
import P from '../../global/components/P';

const HomepageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 99vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledInput = styled.input`
  font-family: 'Courier New', Courier, monospace;
  color: pink;
  font-size: 20px;
  font-weight: 500;
  width: 400px;
  padding: 15px 25px;
  border: 5px solid pink;
  border-radius: 27px;
  outline: none;
  &::placeholder {
    color: pink;
  }
`;

const StyledButton = styled.button`
  outline: none;
  font-family: 'Courier New', Courier, monospace;
  padding: 15px;
  color: pink;
  font-size: 20px;
  font-weight: 500;
  border: 5px solid pink;
  border-radius: 27px;
  margin-left: 10px;
`;

const InputWrapper = styled.div`
  margin-top: 120px;
  display: flex;
`;

const StyledTitle = styled(P)`
  font-family: sans-serif;
  font-size: 2em;
  font-weight: bold;
`;

const StyledPrice = styled(P)`
  font-family: sans-serif;
  font-size: 1.9em;
  font-weight: bold;
  margin-top: 20px;
`;

interface InfoContainerProps {
  imgURL: string | undefined;
}

const InfoContainer = styled.div`
  color: white;
  margin-top: 40px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  background-image: url(${(props: InfoContainerProps) => props.imgURL});
  background-color: pink;
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  height: 50%;
  padding: 40px;
  border-radius: 30px;
`;

interface InitialState {
  title: string | undefined;
  price: string | undefined;
  imgURL: string | undefined;
  content?: string | undefined;
}

const initialValue: InitialState = {
  title: '',
  price: '',
  imgURL: '',
};

export default function Homepage() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = React.useState('');
  const [productData, setProductData] = React.useState(initialValue);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setInputData(event.target.value);
  };

  function tikiParser(data: string) {
    const titleRegex = /><div class="product-name"><span>(.*?)</;
    const priceRegex = /<span class="product-price__current-price">(.*?)</;
    const imageRegex = /large_url":"(.*?)"/;
    return {
      title: titleRegex.exec(data)?.[1],
      price: priceRegex.exec(data)?.[1],
      imgURL: imageRegex.exec(data)?.[1],
    };
  }

  // const handleOnsubmit = async () => {
  //   const response = await axios.get('https://cors-anywhere.herokuapp.com/' + inputData, {
  //     headers: {},
  //   });
  //   const result = tikiParser(response.data);
  //   setProductData(result);
  // }

  const handleOnsubmit = () => {
    const callback = (response: any) => {
      const result = tikiParser(response.response);
      setProductData(result);
    };
    dispatch(fetchTikiProduct(inputData, callback));
  };

  return (
    <HomepageWrapper>
      <InputWrapper>
        <StyledInput placeholder="Please input your link here.." onChange={handleOnChange} />
        <StyledButton onClick={handleOnsubmit}>Submit</StyledButton>
      </InputWrapper>
      <InfoContainer imgURL={productData.imgURL}>
        <StyledTitle>{productData.title}</StyledTitle>
        <StyledPrice>{productData.price && 'PRICE: ' + productData.price}</StyledPrice>
      </InfoContainer>
    </HomepageWrapper>
  );
}
