import React, { Component } from 'react';
import TextArea from 'components/TextArea';

class Help extends Component {
  render() {
    return (
      <div className='main-container'>
        <h1>Help/Suggestions/Special Requests</h1>
        <p>Have ideas for making this a great event? Have special needs? Skills or toys to offer/contribute/lend? Want to help us set up or tear down? We greatly appreciate all that you have to offer.</p>
        <div>
          <TextArea
            label='name'
            type='small'
          />
          <TextArea
            label='email'
            type='small'
          />
          <TextArea
            label='message'
            btnName='Let us know!'
            type='big'
          />
        </div>
      </div>
    )
  }
}

export default Help;
