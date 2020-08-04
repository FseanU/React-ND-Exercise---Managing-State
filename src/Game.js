import React from 'react';


class Game extends React.Component {
  constructor(props){
    super(props);
    const askQuestionObj = this.askQuestion();
    this.state = {
      value1: askQuestionObj.value1,
      value2: askQuestionObj.value2,
      value3: askQuestionObj.value3,
      proposedNum: askQuestionObj.proposedNum,
      rightNum: askQuestionObj.rightNum
    };
  }

  askQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const rightNum = value1 + value2 + value3;
    const proposedNum = Math.floor(Math.random() * 3) + rightNum;
    return {
      value1,
      value2,
      value3,
      proposedNum,
      rightNum
    }
  }

  updateQuestion = (newQuestionObj) => {
    this.setState((prevState)=>({
      value1: newQuestionObj.value1,
      value2: newQuestionObj.value2,
      value3: newQuestionObj.value3,
      rightNum: newQuestionObj.rightNum,
      proposedNum: newQuestionObj.proposedNum,
    }))
  }

  handleAnswer = (e) => {
    // 1. make a variable rightAnswer which check whether proposedNum and rightNum are the same
    // 2. if user answer correctly then numCorrect += 1 && numQuestion +=1
    //    else numQuestion +=1 
    const { proposedNum, rightNum} = this.state;
    const userAnswer = e.currentTarget.name === 'true';
    const rightAnswer = proposedNum === rightNum;
    const answerCorrect = rightAnswer === userAnswer;
    const handleScore = this.props.handleScore;
    handleScore(answerCorrect);
    const newQuestionObj = this.askQuestion();
    this.updateQuestion(newQuestionObj);
  }

  render (){
    return (
      <div>
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">
            {`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedNum}`}
          </p>
        </div>
        <button name="true" onClick={this.handleAnswer}>True</button>
        <button name="false" onClick={this.handleAnswer}>False</button>
      </div>
    )
  }
}

export default Game;