import React from 'react';
import Button from 'components/reusable/Button';

const Gifts = () => {
  return(
    <div>
      <h1>Gifts</h1>
      <a
        href='https://www.zola.com/registry/emilyandalexei'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button text='Registry this way'/>
      </a>
    </div>
  )
}

export default Gifts;
