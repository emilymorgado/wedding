import React, { Component } from 'react';

class Help extends Component {
  render() {
    return (
      <div className='main-container'>
        <h1>Help/Suggestions/Special Requests</h1>
        <p>Have ideas for making this a great event? Have special needs? Skills or toys to offer/contribute/lend? Want to help us set up or tear down? We greatly appreciate all that you have to offer.</p>
        <div>
          <Form
            btnName='Let us know!'/>
        </div>
      </div>
    )
  }
}

export default Help;


class Form extends Component {
  state = {
    name: '',
    email: '',
    text: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // if (this.props.reducer === 'suggestion') {
    //   this.props.saveSuggestion(this.state.text)
    // } else if (this.props.reducer === 'offer') {
    //   this.props.saveOffer(this.state.text)
    // }
    this.setState({
      name: '',
      email: '',
      text: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <textarea
            className='small-input'
            placeholder='Name'
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <textarea
            className='small-input'
            placeholder='Email'
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <textarea
            placeholder='Your message here...'
            onChange={this.handleTextChange}
            value={this.state.text}
          />
          <button className={'form-btn'} >{this.props.btnName}</button>
        </form>
      </div>
    )
  }
}
//If possible, fetch directly in the render()
