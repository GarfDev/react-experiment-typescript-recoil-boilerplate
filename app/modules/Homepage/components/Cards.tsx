import React from 'react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import { Product } from '../types';

interface Props {
  data: Product[];
  onCopy: (string: string) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onDelete: (title: string) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function Card(props: Props) {
  const transitions = useTransition(props.data, item => item.title || '', {
    from: { opacity: 0, height: '0px', marginBottom: '0' },
    enter: { opacity: 1, height: '440px', margin: '70px 40px' },
    leave: { opacity: 0, height: '0px', marginBottom: '0' },
    config: config.slow,
  });

  return (
    <Container>
      {transitions.map((animatedProps: any) => (
        <animated.main key={animatedProps.key} style={animatedProps.props}>
          <InfoContainer
            previewimage={animatedProps.item?.imgURL}
            onClick={props.onCopy(animatedProps.item?.productURL)}
          >
            <ActionButton onClick={props.onDelete(animatedProps.item?.title)}>X</ActionButton>
            <StyledTitle>{animatedProps.item?.title}</StyledTitle>
            <StyledPrice>{animatedProps.item?.price}</StyledPrice>
          </InfoContainer>
        </animated.main>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  padding: 40px;
`;

const ActionButton = styled.div`
  position: absolute !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  width: 32px;
  height: 32px;
  font-size: 32px;
  top: 15px;
  right: 15px;
  z-index: 1;
  transition-duration: 0.5s;
  &:hover {
    transform: rotate(90deg);
    transform-origin: center center;
    transition-duration: 0.5s;
  }
`;

const StyledTitle = styled.div`
  font-family: sans-serif;
  font-size: 1em;
  font-weight: bold;
`;

const StyledPrice = styled.div`
  font-family: sans-serif;
  font-size: 0.9em;
  font-weight: bold;
`;

interface InfoContainerProps {
  previewimage: string | undefined;
}

const InfoContainer = styled(animated.div)`
  color: white;
  position: relative !important;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  background-image: url(${(props: InfoContainerProps) => props.previewimage});
  background-color: pink;
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
  border-radius: 30px;
  height: 440px;
  width: 50vw;
  min-width: 350px;
  max-width: 450px;
  transition-duration: 0.5s;
  &:hover {
    background-color: transparent;
    transition-duration: 0.5s;
  }
`;
