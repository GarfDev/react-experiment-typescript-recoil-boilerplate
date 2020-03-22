import React from 'react';
import styled from 'styled-components';
import { useTrail, animated, config } from 'react-spring';
import { Product } from '../types';

interface Props {
  data: Product[];
}

export default function Card(props: Props) {
  const trail = useTrail(props.data.length, {
    ...config.gentle,
    opacity: 1,
    x: 0,
    height: 360,
    width: 400,
    from: { opacity: 0, x: 20, height: 0, width: 0 },
  });
  return (
    <Container>
      {trail.map(({ x, height, width, ...rest }, index) => (
        <animated.main key={index} style={{ ...rest, transform: x.to((x: number) => `translate3d(0,${x}px,0)`) }}>
          <InfoContainer style={{ height, width }} previewimage={props.data[index].imgURL}>
            <StyledTitle>{props.data[index].title}</StyledTitle>
            <StyledPrice>{props.data[index].price}</StyledPrice>
          </InfoContainer>
        </animated.main>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
`;
