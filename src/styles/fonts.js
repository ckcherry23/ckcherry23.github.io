import { css } from 'styled-components';

import NunitoRegularTtf from '@fonts/Nunito/nunito.regular.ttf';
import DMSansMediumTtf from '@fonts/DMSans/DMSans-Medium.ttf';
import DMSansSemiboldTtf from '@fonts/DMSans/DMSans-SemiBold.ttf';

import NunitoRegularItalicTtf from '@fonts/Nunito/nunito.italic.ttf';
import DMSansMediumItalicTtf from '@fonts/DMSans/DMSans-MediumItalic.ttf';
import DMSansSemiboldItalicTtf from '@fonts/DMSans/DMSans-SemiBoldItalic.ttf';

import SFMonoRegularWoff from '@fonts/SFMono/SFMono-Regular.woff';
import SFMonoRegularWoff2 from '@fonts/SFMono/SFMono-Regular.woff2';
import SFMonoSemiboldWoff from '@fonts/SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWoff2 from '@fonts/SFMono/SFMono-Semibold.woff2';

import SFMonoRegularItalicWoff from '@fonts/SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWoff2 from '@fonts/SFMono/SFMono-RegularItalic.woff2';
import SFMonoSemiboldItalicWoff from '@fonts/SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWoff2 from '@fonts/SFMono/SFMono-SemiboldItalic.woff2';

const sansNormalWeights = {
  400: [NunitoRegularTtf],
  500: [DMSansMediumTtf],
  600: [DMSansSemiboldTtf],
};

const sansItalicWeights = {
  400: [NunitoRegularItalicTtf],
  500: [DMSansMediumItalicTtf],
  600: [DMSansSemiboldItalicTtf],
};

const monoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const monoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const sans = {
  name: 'Sans',
  normal: sansNormalWeights,
  italic: sansItalicWeights,
};

const mono = {
  name: 'Mono',
  normal: monoNormalWeights,
  italic: monoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const sansNormal = createFontFaces(sans);
const sansItalic = createFontFaces(sans, 'italic');

const monoNormal = createFontFaces(mono);
const monoItalic = createFontFaces(mono, 'italic');

const Fonts = css`
  ${sansNormal + sansItalic + monoNormal + monoItalic}
`;

export default Fonts;
