import css from "styled-jsx/css";

export default css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    min-width: 250px;
    background: var(--bg);
    color: var(--text);
    transition: var(--background-transition), var(--text-transition);
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --bg: white;
    --text: black;
    --icon: invert(0);
    --text-transition: color 250ms ease;
    --background-transition: background 250ms ease;
  }

  :root.dark {
    --bg: black;
    --text: white;
    --icon: invert(1);
  }

  a {
    color: var(--text);
    text-decoration: none;
  }
  a {
    transition: var(--text-transition);
  }
`;
