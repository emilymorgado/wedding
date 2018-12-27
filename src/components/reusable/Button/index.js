import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Button = props => {

  // STYLES
  let base = null;
  switch (props.type) {
    case 'bigButton':
      base = css`
        height: 200px;
        width: 400px;
        background-color: #12C988;
        border: 4px solid #439F76;
        border-radius: 10px;
        margin-left: 33%;
        font-size: 5em;
        font-family: 'Pattaya', sans-serif;
      `;
      break;
    case 'signinBtn':
      base = css`
        height: 60px;
        width: 160px;
        float: right;
        margin-right: 2%;
        margin-top: .3%;
        font-size: 1em;
        font-family: 'Mali', cursive;
        background-color: #747474;
        border: 2px solid #272727;
        border-radius: 10px;
      `;
      break;
    case 'formButton':
      base = css`
        height: 80px;
        width: 170px;
        background-color: #12C988;
        border: 4px solid #439F76;
        border-radius: 10px;
        font-size: 1.5em;
        font-family: 'Pattaya', sans-serif;
      `;
      break;
    default:
      base = null;
  }

  return <button css={base}>{props.text}</button>
}

export default Button;
