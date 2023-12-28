import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
  const { width, height } = useWindowSize();

  console.log(width, height);

  const moveOrb = keyframes`
    0%{
      transform: translate(0, 0);
    }
    50%{
      transform: translate(${width}px, ${height / 2}px);
    }
    100%{
      transform: translate(0, 0);
    }
  `;

  const moveOrbMobile = keyframes`
  0%{
    transform: translate(0, 0);
  }
  50%{
    transform: translate(${height / 2}px, ${width}px);
  }
  100%{
    transform: translate(0, 0);
  }
 `;

  const OrbStyled = styled.div`
    width: 80vh;
    height: 80vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #09b9f4 0%, #31b1e5 100%);
    filter: blur(200px);
    animation: ${moveOrb} 20s alternate linear infinite;
    @media (max-width: 768px) {
      width: 40vh;
      height: 40vh;
      border-radius: 50%;
      background: linear-gradient(180deg, #2056a8 10%, ##d58ea4 100%);
      filter: blur(200px);
      animation: ${moveOrbMobile} 5s alternate linear infinite;
    }
  `;

  return <OrbStyled></OrbStyled>;
}

export default Orb;
