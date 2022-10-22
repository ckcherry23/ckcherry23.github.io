import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--rose);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 30px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  div {
    display: flex;
    align-items: end;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .wave {
    font-size: 4vw;
    animation-name: wave-animation;  
    animation-duration: 3s;       
    animation-iteration-count: 1;  
    transform-origin: 70% 70%;      
    display: inline-block;
  }
  
  @keyframes wave-animation {
      0% { transform: rotate( 0.0deg) }
     10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
     20% { transform: rotate(-8.0deg) }
     30% { transform: rotate(14.0deg) }
     40% { transform: rotate(-4.0deg) }
     50% { transform: rotate(10.0deg) }
     60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="row"><span className="wave">👋🏼</span><h1>&emsp;Hi there! I'm</h1></div>;
  const two = <h2 className="big-heading">Charisma Kausar.</h2>;
  const three = <h3 className="big-heading">I create human-centered apps.</h3>;
  const four = (
    <>

      <p>
        I’m a Year 3 Computer Science student at {' '} 
        <a href="https://www.nus.edu.sg/" target="_blank" rel="noreferrer">
          NUS
        </a>. 
        I believe in bringing the best user experience to people through innovative 
        software to make their lives a bit more easier and efficient.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://www.linkedin.com/in/charisma-kausar/"
      target="_blank"
      rel="noreferrer">
      Connect with me on LinkedIn!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
