import React, { Component } from 'react';
import Game from './Game';
import Score from './Score';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0,
    };
  }

  handleScore = (answerCorrect) => {
    if (answerCorrect) {
      this.setState((prevState)=>({
        numCorrect: prevState.numCorrect +1,
        numQuestions: prevState.numQuestions + 1
      }))
    } else { 
      this.setState((prevState)=>({
        numQuestions: prevState.numQuestions + 1
      }))

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <Game numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} handleScore={this.handleScore}/>
          <Score numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} />
        </div>
      </div>
    );
  }
}

export default App;
