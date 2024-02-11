import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconAspnet,
  IconBash,
  IconBookmark,
  IconCodepen,
  IconCPlusPlus,
  IconCSharp,
  IconCss,
  IconCypress,
  IconDart,
  IconDocker,
  IconExpressjs,
  IconExternal,
  IconFigma,
  IconFirebase,
  IconFlask,
  IconFlutter,
  IconFolder,
  IconFork,
  IconGit,
  IconGitHub,
  IconGoogleCloud,
  IconGoogleMaps,
  IconHtml,
  IconInstagram,
  IconJava,
  IconJavaScript,
  IconJest,
  IconJunit,
  IconKubernetes,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconMongoDb,
  IconMedium,
  IconNestjs,
  IconNextjs,
  IconNodejs,
  IconNpm,
  IconOpenAI,
  IconPayPal,
  IconPlayStore,
  IconPostgreSql,
  IconPrisma,
  IconPug,
  IconPython,
  IconReact,
  IconRedux,
  IconRollup,
  IconSass,
  IconScratch,
  IconSql,
  IconStar,
  IconSupabase,
  IconSwift,
  IconTailwind,
  IconTrpc,
  IconTwitter,
  IconTypeScript,
  IconVuejs,
  IconWebpack,
  IconWordpress,
  IconYoutube,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'ASP.NET':
      return <IconAspnet />;
    case 'Bash':
      return <IconBash />;
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
    case 'Cypress':
      return <IconCypress />;
    case 'Dart':
      return <IconDart />;
    case 'Docker':
      return <IconDocker />;
    case 'Express.js':
      return <IconExpressjs />;
    case 'External':
      return <IconExternal />;
    case 'Figma':
      return <IconFigma />;
    case 'Firebase':
      return <IconFirebase />;
    case 'Flask':
      return <IconFlask />;
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
    case 'Google Cloud':
      return <IconGoogleCloud />;
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
    case 'Jest':
      return <IconJest />;
    case 'JUnit':
      return <IconJunit />;
    case 'Kubernetes':
      return <IconKubernetes />;
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
    case 'Nest.js':
      return <IconNestjs />;
    case 'Next.js':
      return <IconNextjs />;
    case 'Node.js':
      return <IconNodejs />;
    case 'npm':
      return <IconNpm />;
    case 'OpenAI API':
    case 'OpenAI':
    case 'Bing AI':
    case 'ChatGPT':
      return <IconOpenAI />;
    case 'PayPal':
      return <IconPayPal />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'PostgreSQL':
      return <IconPostgreSql />;
    case 'Prisma':
      return <IconPrisma />;
    case 'Pug':
      return <IconPug />;
    case 'Python':
      return <IconPython />;
    case 'React':
      return <IconReact />;
    case 'Redux':
      return <IconRedux />;
    case 'Rollup':
      return <IconRollup />;
    case 'Sass':
      return <IconSass />;
    case 'Scratch':
      return <IconScratch />;
    case 'SQL':
      return <IconSql />;
    case 'Star':
      return <IconStar />;
    case 'Supabase':
      return <IconSupabase />;
    case 'Swift':
      return <IconSwift />;
    case 'Tailwind':
      return <IconTailwind />;
    case 'tRPC':
      return <IconTrpc />;
    case 'Twitter':
      return <IconTwitter />;
    case 'TypeScript':
      return <IconTypeScript />;
    case 'Vue.js':
      return <IconVuejs />;
    case 'webpack':
      return <IconWebpack />;
    case 'WordPress':
      return <IconWordpress />;
    case 'YouTube':
      return <IconYoutube />;
    default:
      return <IconFolder />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
