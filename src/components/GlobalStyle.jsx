import { Global, css } from '@emotion/react';
import 'modern-normalize';

const globalStyles = `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#aea5a5;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

const reset = `
  p,
  b,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      margin: 0;
  }

  ul,
  ol {
      margin: 0;
      padding-left: 0;
  }

  a,
  label,
  span,
  b {
      text-decoration: none;
      display: block;
  }

  button {
      cursor: pointer;
      font-family: inherit;
  }
  
  img {
      display: block;
  }`;

const customisedClassNames = `
  .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${globalStyles}
        ${reset}
        ${customisedClassNames}
      `}
    />
  );
};
