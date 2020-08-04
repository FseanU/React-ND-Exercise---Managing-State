import React from 'react';


class Game extends React.Component {

  constructor(props){
    super(props);
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const rightNum = value1 + value2 + value3;
    const proposedNum = Math.floor(Math.random() * 3) + rightNum;
    this.state = {
      value1,
      value2,
      value3,
      proposedNum,
      rightNum
    };
  }

  handleAnswer = (e) => {
    // 1. make a variable rightAnswer which check whether proposedNum and rightNum are the same
    // 2. if user answer correctly then numCorrect += 1 && numQuestion +=1
    //    else numQuestion +=1 
    const { value1, value2, value3, proposedNum, rightNum} = this.state;
    const userAnswer = e.currentTarget.name === 'true';
    const rightAnswer = proposedNum === rightNum;
    const answerCorrect = rightAnswer === userAnswer;
    const handleScore = this.props.handleScore;
    handleScore(answerCorrect);
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