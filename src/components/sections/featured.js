import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 8 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .stack-list {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      justify-content: right;
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 6;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--rose);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    backdrop-filter: blur(10px);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      backdrop-filter: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .stack-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: left;
  }

  .stack-icon-name {
    bottom: -1.3rem;
    font-size: 10px;
    font-family: var(--font-mono);
    opacity: 0;
    position: absolute;
    transition: opacity 0.5s, color 0.5s;
    white-space: nowrap;
  }

  .stack-icon:hover {
    .stack-icon-name {
      opacity: 1;
    }

    &:hover {
      color: var(--rose);
    }
  }

  .stack-icon {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 30px;
    justify-content: center;
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    position: relative;
    width: 40px;
    z-index: 0;
    max-height: 40px;
    max-width: 40px;
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.15;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--rose);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: var(--navy);
        outline: 0;

        &:before,
        .img {
          background: var(--navy);
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: transparent;
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
      }
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { frontmatter: { date: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              techstack
              github
              external
              cta
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>

      <StyledProjectsGrid>
        {featuredProjects?.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { external, title, techstack, github, cover, cta } = frontmatter;
          const image = getImage(cover);

          return (
            <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">
                    <a href={external}>{title}</a>
                  </h3>

                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />

                  <div className="stack-list">
                    {techstack?.map(tech => (
                      <div className="stack-icon" key={tech}>
                        <Icon name={tech} />
                        <div className="stack-icon-name">{tech}</div>
                      </div>
                    ))}
                  </div>

                  <div className="project-links">
                    {external && (
                      <a href={external} aria-label="External Link" className="cta">
                        Demo
                      </a>
                    )}
                    {github && (
                      <a href={github} aria-label="GitHub Link" className="cta">
                        View on GitHub
                      </a>
                    )}
                    {cta && (
                      <a href={cta} aria-label="Course Link" className="cta">
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-image">
                <a href={external ? external : github ? github : '#'}>
                  <GatsbyImage image={image} alt={title} className="img" />
                </a>
              </div>
            </StyledProject>
          );
        })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
