import React from 'react';
import styled from 'styled-components';

interface Props {
  handleOnChange: (event: React.FormEvent<HTMLFormElement>) => void;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Info(props: Props) {
  return (
    <Container onSubmit={props.handleOnSubmit} onChange={props.handleOnChange}>
      <ItemContainer>
        <StyledInput placeholder="Please input your link here.." />
        <StyledButton type="submit">Submit</StyledButton>
      </ItemContainer>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  font-family: 'Courier New', Courier, monospace;
  color: pink;
  font-size: 20px;
  font-weight: 530;
  width: 400px;
  padding: 15px 25px;
  border: 2px solid pink;
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
  background-color: white;
  font-size: 20px;
  font-weight: 530;
  border: 2px solid pink;
  border-radius: 27px;
  margin: 10px;
  &:hover {
    box-shadow: inset 0px 0px 24px -13px rgba(255, 192, 203, 1);
  }
  &:active {
    box-shadow: inset 0px 0px 34px -13px rgba(255, 192, 203, 1);
  }
`;
