import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { IconBookmark } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledMediumSection = styled.section`
  & > header {
    margin-bottom: 50px;
    text-align: center;
  }

  .no-decoration {
    display: block;
    margin-bottom: 10px;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .medium-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
    display: block;
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
  }
`;

const StyledGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 15px;
  margin-top: 50px;
  position: relative;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;
const StyledPost = styled.li`
  transition: var(--transition);
  cursor: default;

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post__inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .post__inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    background-color: var(--light-navy);

    header,
    a {
      width: 100%;
    }
  }

  .post__icon {
    ${({ theme }) => theme.mixins.flexBetween};
    color: var(--rose);
    margin-bottom: 30px;
    margin-left: -5px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  .post__title {
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

  .post__desc {
    color: var(--light-slate);
    font-size: 17px;
  }

  .post__date {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    text-transform: uppercase;
  }

  ul.post__tags {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding-left: 12px;
    margin: 0;
    list-style: none;

    li {
      color: var(--rose);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Medium = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealMediumLink = useRef(null);
  const revealPosts = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    fetch('https://mediumpostsapi.vercel.app/api/charismakausar')
      .then(response => response.json())
      .then(json => {
        const { dataMedium } = json;
        setMediumPosts(dataMedium);
      })
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealMediumLink.current, srConfig());
    revealPosts.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 4;
  const initialPosts = mediumPosts?.slice(0, GRID_LIMIT);
  const postsToShow = showMore ? mediumPosts : initialPosts;

  const postInner = post => {
    const { title, description, date, link, tags } = post;
    const formattedDate = new Date(date).toLocaleDateString();

    return (
      <div className="post__inner">
        <header>
          <div className="post__icon">
            <IconBookmark />
          </div>
          <h5 className="post__title">
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h5>
          <p className="post__desc">{description}</p>
        </header>

        <footer>
          <span className="post__date">{formattedDate}</span>
          <ul className="post__tags">
            {tags.map((tag, i) => (
              <li key={i}>#{tag}</li>
            ))}
          </ul>
        </footer>
      </div>
    );
  };

  return (
    <StyledMediumSection id="blog">
      <header>
        <h2 className="numbered-heading no-decoration" ref={revealTitle}>
          Stories from my journey
        </h2>
        <Link
          className="inline-link medium-link"
          to="https://medium.com/@charismakausar"
          ref={revealMediumLink}>
          view my Medium blog
        </Link>
      </header>

      <StyledGrid>
        {prefersReducedMotion ? (
          <>
            {postsToShow?.map((post, i) => (
              <StyledPost key={i}>{postInner(post)}</StyledPost>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {postsToShow?.map((post, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}>
                <StyledPost
                  key={i}
                  ref={el => (revealPosts.current[i] = el)}
                  style={{
                    transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                  }}>
                  {postInner(post)}
                </StyledPost>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </StyledGrid>

      {mediumPosts?.length > GRID_LIMIT && (
        <button className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </StyledMediumSection>
  );
};

export default Medium;
