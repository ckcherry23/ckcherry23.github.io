import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconAspnet,
  IconBookmark,
  IconCodepen,
  IconCPlusPlus,
  IconCSharp,
  IconCss,
  IconDart,
  IconExternal,
  IconFigma,
  IconFirebase,
  IconFlutter,
  IconFolder,
  IconFork,
  IconGit,
  IconGitHub,
  IconGoogleMaps,
  IconHtml,
  IconInstagram,
  IconJava,
  IconJavaScript,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconMongoDb,
  IconMedium,
  IconNextjs,
  IconNodejs,
  IconPayPal,
  IconPlayStore,
  IconPython,
  IconReact,
  IconSass,
  IconStar,
  IconSql,
  IconTailwind,
  IconTwitter,
  IconVuejs,
  IconWordpress
} from '@components/icons';
import IconPostgreSql from './postgresql';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'ASP.NET':
      return <IconAspnet />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'C++':
      return <IconCPlusPlus />;
    case 'C#':
      return <IconCSharp />;
    case 'CSS':
      return <IconCss />;
    case 'Dart':
      return <IconDart />;
    case 'External':
      return <IconExternal />;
    case 'Figma':
      return <IconFigma />;
    case 'Firebase':
      return <IconFirebase />;
    case 'Flutter':
      return <IconFlutter />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'Git':
      return <IconGit />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Google Maps':
      return <IconGoogleMaps />;
    case 'HTML':
      return <IconHtml />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Java':
      return <IconJava />;
    case 'JavaScript':
      return <IconJavaScript />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Medium':
      return <IconMedium />;
    case 'mongoDB':
      return <IconMongoDb />;
    case 'Next.js':
      return <IconNextjs />;
    case 'Node.js':
      return <IconNodejs />;
    case 'PayPal':
      return <IconPayPal />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'PostgreSQL':
      return <IconPostgreSql />;
    case 'Python':
      return <IconPython />;   
    case 'React':
      return <IconReact />;
    case 'Sass':
      return <IconSass />;
    case 'Star':
      return <IconStar />;
    case 'SQL':
      return <IconSql />;
    case 'Tailwind CSS':
      return <IconTailwind />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Vue.js':
      return <IconVuejs />;
    case 'WordPress':
      return <IconWordpress />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
