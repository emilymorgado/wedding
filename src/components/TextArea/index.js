import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

class TextArea extends Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveSuggestion(this.state.text)
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <textarea
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(TextArea);
