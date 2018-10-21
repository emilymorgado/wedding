import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from 'store/actions';

class TextArea extends Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.props.reducer === 'suggestion') {
      this.props.saveSuggestion(this.state.text)
    } else if (this.props.reducer === 'offer') {
      this.props.saveOffer(this.state.text)
    }
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
          <button>{this.props.btnName}</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onSaveSuggestions: suggestion => {
//       dispatch(saveSuggestion(suggestion));
//     },
    // offers: offer => {
      // dispatch(saveOffer(offer));
    // },
  // };
// };

export default TextArea

// export default connect(null, mapDispatchToProps)(TextArea);
