import React, { Component } from 'react';
import { useState } from 'react';
import { css } from 'emotion';
import fire from 'fire';
import axiosInstance from 'axiosInstance';


class QandA extends Component {
  state = {
    // ref: fire.database().ref('questions').orderByKey(),
    docs: [],
    loading: true,
  }

  componentDidMount() {
    //Now getting saved in action/reducer?
    axiosInstance.get('/questions.json')
      .then(res => {
        const docs = [];

        for (let key in res.data) {
          let enter = { id: key, question: res.data[key].question, answer: res.data[key].answer}
          docs.push(enter);
        }
        this.setState({ loading: false, docs });
        //set to redux store instead
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE', prevProps, this.props)
    if (this.props !== prevProps) {
      console.log('BIG IF', prevProps, this.props)
    }

    if (this.state.docs !== prevState.docs) {
      console.log(prevProps)
      console.log(prevState)
      console.log(this.state)
    }
  }

  render() {
    console.log('Render QandA', this.props)
    // STYLES
    const questionStyle = css`
      font-family: 'Mali', cursive;
      font-size: 2em;
      color: #272727;
    `

    let questionsAndAnswers = this.state.docs.map(doc => {
      console.log('doc', doc, doc.id, doc.question)
      return (
        <li key={doc.id}>{doc.question ? doc.question : null}</li>
      )
    });

    return (
      <div className='main-container'>
        <h1>Questions and Answers</h1>
        <p className={'description'}>
          Have a question? Have special needs? Please let us know!
        </p>
        <div>
          <Form
            btnName='Let us know!'/>
        </div>
        <ul className={questionStyle}>
          {questionsAndAnswers}
        </ul>
      </div>
    )
  }
}
export default QandA;


// Improvements: make the form a button that opens a modal window
const Form = () => {
  const [text, setText] = useState('');

  const handleTextChange = event => {
    setText(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = { question: text, answer: '' }
    if (data.question.length > 0) {
      // Send the message to Firebase
      fire.database().ref('questions').push(data);

    }
    setText('');
  }

  // STYLES
  const submitButton = css`
    height: 80px;
    width: 170px;
    background-color: #12C988;
    border: 4px solid #439F76;
    border-radius: 10px;
    font-size: 1.5em;
    font-family: 'Pattaya', sans-serif;
  `
  const questionArea = css`
    height: 400px;
    width: 1000px;
    font-size: 1.5em;
    font-family: 'Mali', cursive;
    border: 5px solid #C34271;
    background-color: #F070A1;
  `

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <textarea
          className={questionArea}
          placeholder='Your message here...'
          onChange={handleTextChange}
          value={text}
        />
        <br/>
        <button className={submitButton}>Let Us Know!</button>
      </form>
    </div>
  )
}
