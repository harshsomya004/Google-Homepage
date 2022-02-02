import React from "react";
import "./styles.css";
import { css } from "@emotion/css";

function main() {
  return (
    <div
      className={css`
        font-family: sans-serif;
      `}
    >
      <p
        className={css`
          text-align: right;
          margin-top: 2%;
        `}
      >
        <a
          href="https://www.google.com/gmail/"
          className={css`
            color: black;
            text-decoration: none;
            margin-right: 2%;
          `}
        >
          Gmail{" "}
        </a>
        <a
          href="https://www.google.co.in/images"
          className={css`
            color: black;
            text-decoration: none;
            margin-right: 2%;
          `}
        >
          Images{" "}
        </a>
        <a
          href="https://www.google.com/gmail/"
          className={css`
            background: #4887ef;
            color: white;
            text-decoration: none;
            margin-right: 2%;
            padding: 0.5% 1%;
            border-radius: 3px;
            font-weight: bold;
          `}
        >
          {" "}
          Sign In
        </a>
      </p>
      <div
        className={css`
          text-align: center;
          display: block;
          margin: 0 auto;
          clear: both;
          padding-top: 112px;
          padding-bottom: 20px;
        `}
      >
        <a href="https://en.wikipedia.org/wiki/History_of_Google">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </a>
      </div>
      <div
        className={css`
          text-align: center;
        `}
      >
        <input
          type="text"
          placeholder="Search Google or Type any URL"
          id="input"
          className={css`
            width: 30%;
            line-height: 20px;
            padding: 0.5%;
            border-radius: 40px;
            border-bottom-width: 2px;
          `}
        />
      </div>
      <div
        className={css`
          text-align: center;
          margin-top: 5px;
          padding: 2%;
        `}
      >
        <button
          onClick={() => {
            window.location = `https://www.google.com/search?q=${
              document.getElementById("input").value
            }`;
          }}
        >
          Google Search
        </button>
        <button
          onClick={() => {
            window.location = `https://www.google.com/search?q=${
              document.getElementById("input").value
            }`;
          }}
        >
          I'm Feeling Lucky
        </button>
      </div>
      <footer>
        <ul className="footer-left">
          <li>
            <a href="https://www.google.com/">About</a>
          </li>
          <li>
            <a href="https://www.google.com/">Advertising</a>
          </li>
          <li>
            <a href="https://www.google.com/">Business</a>
          </li>
          <li>
            <a href="https://www.google.com/">How Search Works</a>
          </li>
        </ul>
        <ul className="footer-right">
          <li>
            <a href="https://www.google.com/">Privacy</a>
          </li>
          <li>
            <a href="https://www.google.com/">Terms</a>
          </li>
          <li>
            <a href="https://www.google.com/">Settings</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default main;
