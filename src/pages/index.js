import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Layout,
  Hero,
  About,
  Skills,
  Jobs,
  Activities,
  Featured,
  Projects,
  Contact,
} from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Skills />
      <Jobs />
      <Activities />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;

export function Head() {
  return (
    <meta name="google-site-verification" content="YJM78utl-_5zhK4TdlptOOXbZjUIPShGRX5o0zpt22E" />
  );
}
