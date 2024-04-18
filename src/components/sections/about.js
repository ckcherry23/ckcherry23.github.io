import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div``;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 100%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--rose);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const IMAGE_OFFSET = 10;
  const SCALE_FACTOR = 0.06;

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const defaultImages = data.allFile.edges
    .filter(image => {
      const imageData = image.node.childImageSharp?.gatsbyImageData;
      if (!imageData) {
        return false;
      }

      const imageSrc = imageData.images.fallback.src;
      const n = imageSrc.lastIndexOf('/');
      const imageFileName = imageSrc.substring(n + 1);

      return imageFileName.startsWith('me');
    })
    .toSorted((a, b) => {
      const getImageOrder = image => {
        const imageData = image.node.childImageSharp?.gatsbyImageData;
        const imageSrc = imageData.images.fallback.src;
        const n = imageSrc.lastIndexOf('-');
        const imageOrder = imageSrc.substring(n + 1);
        return parseInt(imageOrder);
      };

      return getImageOrder(a) - getImageOrder(b);
    });

  const [images, setImages] = useState(defaultImages);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const nextImage = () => {
    setImages(prevCards => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop());
      return newArray;
    });
  };

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Charisma and I enjoy creating software products that make a positive impact
              in people's lives!
            </p>
            <p>
              I've built <a href="https://www.artisan.land">Artisan</a>, a landing page and
              portfolio site generator using AI, and I maintain an open-source project called{' '}
              <a href="https://github.com/reposense/RepoSense">RepoSense</a>, a Git code
              contributions analyzer.
            </p>
            <p>
              As the Frontend Lead for{' '}
              <a href="https://dsc.comp.nus.edu.sg/">Google Developer Student Club</a>, I am helping
              Ground-Up Initiative, an NGO with 25000+ volunteers, to manage their volunteers and
              events more efficiently using technology.
            </p>
            <p>
              Currently, I'm diving deep into the realm of Augmented Reality smartglasses for my
              Final Year Project at the <a href="https://www.synteraction.org/">Synteraction Lab</a>
              . I also tutor part-time as a Teaching Assistant for Software Engineering and
              Interaction Design.
            </p>
          </div>
        </StyledText>
        <div
          style={{ position: 'relative', height: '360px', width: '300px' }}
          className="relative h-60 w-60 md:h-60 md:w-96">
          {images?.map((image, index) => (
            <motion.div
              key={image.node.childImageSharp.gatsbyImageData.images.fallback.src}
              style={{
                transformOrigin: 'top center',
                position: 'absolute',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              animate={{
                top: index * -IMAGE_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: images.length - index, //  decrease z-index for the cards that are behind
              }}
              onClick={nextImage}>
              <StyledPic>
                <div className="wrapper">
                  <GatsbyImage
                    className="img"
                    style={{
                      height: '360px',
                    }}
                    image={image.node.childImageSharp.gatsbyImageData}
                    alt="Headshot"
                  />
                </div>
              </StyledPic>
            </motion.div>
          ))}
        </div>
      </div>
    </StyledAboutSection>
  );
};

export default About;
