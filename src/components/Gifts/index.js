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
        <Button text='Registry this way'/>
      </div>
    </div>
  )
}

export default Gifts;
