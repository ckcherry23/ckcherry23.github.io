import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledSkillsSection = styled.section`
  max-width: 800px;
`;
const StyledText = styled.div`
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }

  .skill-icon-name {
    bottom: -1.3rem;
    font-size: 10px;
    font-family: var(--font-mono);
    opacity: 0;
    position: absolute;
    transition: opacity 0.5s, color 0.5s;
    white-space: nowrap;
  }

  .skill-icon:hover {
    .skill-icon-name {
      opacity: 1;
    }

    &:hover {
      color: var(--rose);
    }
  }

  .skill-icon {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 40px;
    justify-content: center;
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    position: relative;
    width: 40px;
    z-index: 0;
    max-height: 40px;
    max-width: 40px;
  }

  .skill-heading {
    font-size: var(--fz-s);
    text-align: left;
    color: var(--white);
    font-weight: 600;
  }

  .skill-heading:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--rose);
  }

  ul {
    list-style: none;
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const languages = ['Java', 'JavaScript', 'Swift', 'Python', 'HTML', 'CSS', 'C#', 'C++', 'SQL'];
  const frameworks = [
    'React',
    'Vue.js',
    'Node.js',
    'Flutter',
    'Firebase',
    'mongoDB',
    'Git',
    'Figma',
    'Sass',
  ];

  return (
    <StyledSkillsSection id="about" ref={revealContainer}>
      <h2>My Skills</h2>
      <StyledText>
        <div>
          <p>Here are a few technologies I’ve been working with recently:</p>
        </div>
        <ul>
          <li className="skill-heading">Languages:</li>
          <div className="skills-list">
            {languages?.map(skill => (
              <div className="skill-icon" key={skill}>
                <Icon name={skill} />
                <div className="skill-icon-name">{skill}</div>
              </div>
            ))}
          </div>

          <li className="skill-heading">Frameworks & Tools:</li>
          <div className="skills-list">
            {frameworks?.map(skill => (
              <div className="skill-icon" key={skill}>
                <Icon name={skill} />
                <div className="skill-icon-name">{skill}</div>
              </div>
            ))}
          </div>
        </ul>
      </StyledText>
    </StyledSkillsSection>
  );
};

export default Skills;
