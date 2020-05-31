import { useContext, useLayoutEffect, useState } from "react";
import { Context } from "../lib/context";

export default () => {
  let value = useContext(Context);
  const [darkmode, setDarkmode] = useState(value.darkmode);

  useLayoutEffect(() => setDarkmode(value.darkmode), []);

  function updateDarkmode() {
    value.updateDarkmode(!darkmode);
    setDarkmode(!darkmode);
  }

  return (
    <div>
      <h1>Darktheme</h1>
      <label className="form-switch" htmlFor="checkbox">
        <input
          id="checkbox"
          type="checkbox"
          checked={darkmode}
          onChange={updateDarkmode}
        />
        <i></i>
      </label>
      <a
        className="github-link"
        href="https://github.com/JonathanEkberg/next-darktheme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/icons/github.svg" className="github" />
        GitHub
      </a>
      <style jsx>{`
        div {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .github-link {
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .github {
          filter: var(--icon);
          transition: filter 250ms ease;
          padding-right: 5px;
          height: 2rem;
        }

        h1 {
          letter-spacing: 0.25px;
          font-weight: 700;
          margin-bottom: 1em;
        }

        .form-switch {
          display: inline-block;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .form-switch i {
          position: relative;
          display: inline-block;
          margin-right: 0.5rem;
          width: 46px;
          height: 26px;
          background-color: #ddd;
          border-radius: 23px;
          vertical-align: text-bottom;
          transition: all 0.3s linear;
        }

        .form-switch i::before {
          content: "";
          position: absolute;
          left: 0;
          width: 42px;
          height: 22px;
          background-color: #ddd;
          border-radius: 11px;
          transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
          transition: all 0.25s linear;
        }

        .form-switch i::after {
          content: "";
          position: absolute;
          left: 0;
          width: 22px;
          height: 22px;
          background-color: #fff;
          border-radius: 11px;
          box-shadow: 0 0px 3px rgba(0, 0, 0, 0.25);
          transform: translate3d(2px, 2px, 0);
          transition: all 0.2s ease-in-out;
        }

        .form-switch:active i::after {
          width: 28px;
          transform: translate3d(2px, 2px, 0);
        }

        .form-switch:active input:checked + i::after {
          transform: translate3d(16px, 2px, 0);
        }

        .form-switch input {
          display: none;
        }

        .form-switch input:checked + i {
          background-color: #4bd763;
        }

        .form-switch input:checked + i::before {
          transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
        }

        .form-switch input:checked + i::after {
          transform: translate3d(22px, 2px, 0);
        }

        .form-switch i {
          transform: scale(2);
        }
      `}</style>
    </div>
  );
};
