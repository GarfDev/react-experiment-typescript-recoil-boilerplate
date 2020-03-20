import React from 'react';
import styled from 'styled-components';
import P from '../../../global/components/P';
import { useTrail, animated, config } from 'react-spring';

interface Props {
  title: string | undefined;
  price: string | undefined;
  imgURL: string | undefined;
  content?: string | undefined;
}

export default function Info(props: Props) {
  const trail = useTrail(1, {
    ...config.gentle,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.main
          key={index}
          style={{ ...rest, transform: x.interpolate((x: number) => `translate3d(0,${x}px,0)`) }}
        >
          <InfoContainer style={height} imgURL={props.imgURL}>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledPrice>{props.price && 'PRICE: ' + props.price}</StyledPrice>
          </InfoContainer>
        </animated.main>
      ))}
    </>
  );
}

const StyledTitle = styled(animated.div)`
  font-family: sans-serif;
  font-size: 2em;
  font-weight: bold;
`;

const StyledPrice = styled(animated.div)`
  font-family: sans-serif;
  font-size: 1.9em;
  font-weight: bold;
`;

interface InfoContainerProps {
  imgURL: string | undefined;
}

const InfoContainer = styled(animated.div)`
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
  width: 55vw;
  height: 400px;
  padding: 40px;
  border-radius: 30px;
`;
