import React from 'react';
import styled from 'styled-components';
import P from '../../../global/components/P';

interface Props {
  title: string | undefined;
  price: string | undefined;
  imgURL: string | undefined;
  content?: string | undefined;
}

export default function Info(props: Props) {
  return (
    <InfoContainer imgURL={props.imgURL}>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledPrice>{props.price && 'PRICE: ' + props.price}</StyledPrice>
    </InfoContainer>
  );
}

const StyledTitle = styled(P)`
  font-family: sans-serif;
  font-size: 2em;
  font-weight: bold;
`;

const StyledPrice = styled(P)`
  font-family: sans-serif;
  font-size: 1.9em;
  font-weight: bold;
`;

interface InfoContainerProps {
  imgURL: string | undefined;
}

const InfoContainer = styled.div`
  position: relative !important;
  margin-top: 40px;
  color: white;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  background-image: url(${(props: InfoContainerProps) => props.imgURL});
  background-color: pink;
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  height: 400px;
  padding: 40px;
  border-radius: 30px;
`;
