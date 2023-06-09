import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 20px;
    align-items: start;

    .company-name {
      color: var(--slate);
      font-size: var(--fz-xxs);
      font-family: var(--font-mono);
      margin-top: 8px;
    }

    .project-links {
      display: flex;
      align-items: center;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;
        width: 40px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

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

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  footer {
    width: 100%;

    hr {
      width: 100%;
      margin: 0;
      margin-top: 1rem;
      background-color: var(--dark-slate);
    }
  }

  .stack-list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    justify-content: left;
    row-gap: 20px;
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
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    position: relative;
    width: 30px;
    z-index: 0;
    max-height: 40px;
    max-width: 40px;
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              techstack
              github
              external
              company
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = node => {
    const { frontmatter, html } = node;
    const { github, external, title, techstack, company } = frontmatter;

    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <h3 className="project-title">
              <a href={external || github} target="_blank" rel="noreferrer">
                {title}
              </a>
              <div className="company-name">{company}</div>
            </h3>

            <div className="project-links">
              {github && (
                <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <Icon name="GitHub" />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
        </header>
        <footer>
          {/* {techstack && <hr />} */}
          <div className="stack-list">
            {techstack?.map(tech => (
              <div className="stack-icon" key={tech}>
                <Icon name={tech} />
                <div className="stack-icon-name">{tech}</div>
              </div>
            ))}
          </div>
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection id="other-projects">
      <h2 ref={revealTitle}>Other Projects</h2>

      <Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>
        view the archive
      </Link>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow?.map(({ node }, i) => (
              <StyledProject key={i}>{projectInner(node)}</StyledProject>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow?.map(({ node }, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}>
                <StyledProject
                  key={i}
                  ref={el => (revealProjects.current[i] = el)}
                  style={{
                    transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                  }}>
                  {projectInner(node)}
                </StyledProject>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      {projects.length > GRID_LIMIT && (
        <button className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </StyledProjectsSection>
  );
};

export default Projects;
