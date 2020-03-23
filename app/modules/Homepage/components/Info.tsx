import React from 'react';
import styled from 'styled-components';
import { useTrail, animated, config } from 'react-spring';

interface Props {
  title: string | undefined;
  price: string | undefined;
  previewImage: string | undefined;
  onSaveItems: (event: React.MouseEvent<HTMLDivElement>) => void;
  visible: boolean;
  content?: string | undefined;
}

export default function Info(props: Props) {
  const trail = useTrail(1, {
    ...config.gentle,
    opacity: props.visible ? 1 : 0,
    pointerEvents: props.visible ? 'auto' : 'none',
    x: 0,
    height: props.visible ? 360 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.main key={index} style={{ ...rest, transform: x.to((x: number) => `translate3d(0,${x}px,0)`) }}>
          <InfoContainer style={{ height }} previewimage={props.previewImage}>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledPrice>{props.price && props.price}</StyledPrice>
            <ButtonContainer>
              <Button>Do this</Button>
              <Button onClick={props.onSaveItems}>Do that</Button>
            </ButtonContainer>
          </InfoContainer>
        </animated.main>
      ))}
    </>
  );
}

const StyledTitle = styled.div`
  font-family: sans-serif;
  font-size: 2em;
  font-weight: bold;
`;

const StyledPrice = styled.div`
  font-family: sans-serif;
  font-size: 1.9em;
  font-weight: bold;
`;

interface InfoContainerProps {
  previewimage: string | undefined;
}

const InfoContainer = styled(animated.div)`
  margin-top: 40px;
  color: white;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  background-image: url(${(props: InfoContainerProps) => props.previewimage});
  background-color: pink;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 1000px;
  padding: 40px;
  border-radius: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-top: 30px;
`;

const Button = styled.div`
  width: 45%;
  display: flex;
  font-size: 40px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 6px solid white;
  border-radius: 30px;
  user-select: none;
  cursor: pointer;
`;
