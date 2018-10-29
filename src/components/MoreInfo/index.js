import React, { Component } from 'react';
import TextArea from 'components/TextArea';

// Includes suggestions, help offers, Q/A

class MoreInfo extends Component {
  render() {
    return (
      <div>
        <h1>Add a Suggestion</h1>
        <div>
          <TextArea
            reducer='suggestion'
            btnName='Send Suggestion'
            type='suggestion'
          />
        </div>
        <div>
          <h2>I'm interested in helping!</h2>
          <h3>Let us know what you can help with:</h3>
          <TextArea
            reducer='offer'
            btnName='Submit Offer'/>
        </div>
        <div><h4>Q&A</h4></div>
      </div>
    )
  }
}

export default MoreInfo;
