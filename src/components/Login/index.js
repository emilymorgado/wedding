import React from 'react';
import { useState } from 'react';
import fire from 'fire';

const Login = () => {
  return (
    <div className='main-container'>
      <h1>Login</h1>
      <div>
        <Form
          btnName='LOG ME IN!'/>
      </div>
    </div>
  )
}
export default Login;


const Form = () => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setText] = useState('');

  // const handleNameChange = event => {
  //   setName(event.target.value)
  // };

  const handleEmailChange = event => {
    setEmail(event.target.value)
  };

  const handlePasswordChange = event => {
    setText(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = { email: email, password: password}
    /* Send the message to Firebase */
    fire.database().ref('login').push(data);

    // setName('')
    setEmail('')
    setPassword('')
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
        <button className={'form-btn'}>Let Us Know!</button>
      </form>
    </div>
  )
}
