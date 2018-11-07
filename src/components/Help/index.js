import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Help = () => {
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
export default Help;


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleNameChange = event => {
    setName(event.target.value)
  };

  const handleEmailChange = event => {
    setEmail(event.target.value)
  };

  const handleTextChange = event => {
    setText(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault();

    setName('')
    setEmail('')
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <textarea
          className='small-input'
          placeholder='Name'
          onChange={handleNameChange}
          value={name}
        />
        <textarea
          className='small-input'
          placeholder='Email'
          onChange={handleEmailChange}
          value={email}
        />
        <textarea
          placeholder='Your message here...'
          onChange={handleTextChange}
          value={text}
        />
        <button className={'form-btn'}>Let Us Know!</button>
      </form>
    </div>
  )
}
