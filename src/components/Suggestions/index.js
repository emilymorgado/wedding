import React, { Component } from 'react';

import Navbar from 'components/Navbar'; // This can be improved with react router?
import TextArea from 'components/TextArea';

class Suggestions extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Add a Suggestion</h1>
        <TextArea
          reducer='suggestion'
          btnName='Send Suggestion'
        />
      </div>
    )
  }
}

export default Suggestions;
