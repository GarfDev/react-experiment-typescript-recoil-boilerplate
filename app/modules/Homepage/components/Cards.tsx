import React from 'react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import { Product } from '../types';

interface Props {
  data: Product[];
}

export default function Card(props: Props) {
  const transitions = useTransition(props.data, item => item.title || '', {
    from: { opacity: 0, height: '0px', marginBottom: '0' },
    enter: { opacity: 1, height: '440px', margin: '70px 40px' },
    leave: { opacity: 0, height: '0px', marginBottom: '0' },
    config: config.default,
  });

  return (
    <Container>
      {transitions.map((animatedProps: any) => (
        <animated.main key={animatedProps.key} style={animatedProps.props}>
          <InfoContainer previewimage={animatedProps.item?.imgURL}>
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
  width: 560px;
`;
