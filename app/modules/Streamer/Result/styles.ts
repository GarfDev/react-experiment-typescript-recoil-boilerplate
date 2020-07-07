import styled from 'styled-components';

const Styled = {
  ResultContainer: styled.div`
    width: 70%;
    height: max-content;
    padding: 10px;
    margin: 10px;
  `,
  Result: styled.div<{ backgroundImg: string }>`
    height: 80px;
    background-image: ${props => props.backgroundImg};
    background-position: center;
    background-repeat: no-repeat;
  `,
};

export default Styled;
