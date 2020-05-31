import css from "styled-jsx/css";

export default css.global`
  /* latin */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-display: block;
    src: url(/fonts/inter-var-latin.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* these other fonts are only used and downloaded when a special chars is shown
in most cases, they are not downloaded at all */
  /* latin-ext */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(/fonts/inter-var-latin-ext.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* cyrillic */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-cyrillic.woff2)
      format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 100;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 200;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 300;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 400;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 500;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 600;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 700;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 800;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  @font-face {
    font-family: "Inter";
    font-style: swap;
    font-weight: 900;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587418127/fonts/2/inter-var-cyrillic-ext.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  /* greek */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://assets.vercel.com/raw/upload/v1587418276/fonts/2/inter-var-greek.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  /* greek-ext */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(/fonts/inter-var-greek-ext.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  /* vietnamese */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(/fonts/inter-var-vietnamese.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
`;
