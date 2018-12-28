import React from 'react';
import Button from 'components/reusable/Button';
import { css } from 'emotion';

// STYLES
const btnStyle = css`
  display: flex;
  justify-content: center;
`

const Gifts = () => {
  return(
    <div>
      <h1>Gifts</h1>
      <div className={btnStyle}>
        <a
          href="https://www.zola.com/registry/emilyandalexei"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Registry this way" type="bigButton" />
        </a>
      </div>
    </div>
  )
}

export default Gifts;
