import React from 'react';
import { css } from 'emotion';

// STYLES
const bigButton = css`
  height: 200px;
  width: 400px;
  background-color: #12C988;
  border: 4px solid #439F76;
  border-radius: 10px;
  margin-left: 33%;
  font-size: 5em;
  font-family: 'Pattaya', sans-serif;
  @media (max-width: 736px) {
    height: 100px;
    width: 200px;
    font-size: 1.6em;
  }
`
const Button = props => {
  console.log(props)
  return (
    <button className={bigButton}>{props.text}</button>
  )
}

export default Button;
