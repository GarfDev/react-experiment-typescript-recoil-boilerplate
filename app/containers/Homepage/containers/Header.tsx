import React, { useState } from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

const items = ['Reminder'];
const config = { mass: 5, tension: 2000, friction: 200 };

export default function Header() {
  const [showText, setShowText] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: showText ? 1 : 0,
    x: showText ? 0 : 20,
    height: showText ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <Container onClick={() => setShowText(state => !state)}>
      {trail.map(({ x, height, ...rest }, index) => (
        <Text
          key={items[index]}
          style={{ ...rest, transform: (x as any).interpolate((x: any) => `translate3d(0,${x}px,0)`) }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </Text>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0px;
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
  height: 80px;
  line-height: 80px;
  color: pink;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
`;
