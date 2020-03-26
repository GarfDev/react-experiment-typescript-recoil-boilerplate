import React from 'react';
import styled from 'styled-components';
import { useTrail, animated, config } from 'react-spring';

interface Props {
  titles: string[];
}

export default function Header(props: Props) {
  const trail = useTrail(props.titles.length, {
    ...config.gentle,
    opacity: 1,
    x: 0,
    height: 'max-content',
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Container>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.main
          key={props.titles[index]}
          style={{ ...rest, transform: x.to((x: number) => `translate3d(0,${x}px,0)`) }}
        >
          <Text style={{ height }}>{props.titles[index]}</Text>
        </animated.main>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`;

const Text = styled(animated.div)`
  position: relative;
  color: pink;
  font-size: max(10vmax, 20px);
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
`;
