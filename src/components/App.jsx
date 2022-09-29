import React from "react";
import { Main,FeddbackBtn,BtnBlock } from "./App.styled";

export class App extends React.Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  clickBtn = (e) => {
    const key = e.currentTarget.name;
    this.setState(prevState => ({
      [key] : prevState[key] += 1,
    }));
  }
  
  
  countTotalFeedback() {
    return Object.values(this.state).reduce((akk,val )=>akk+val)
   }
  countPositiveFeedbackPercentage() { 
    return parseInt((this.state.good/this.countTotalFeedback())*100) 
  };

  render() {
    // const {bad, neutral, good} = this.state
    return (
      <Main>
        <h2>Please leave feedback</h2>
        <BtnBlock>
          <FeddbackBtn  type="button" name="good"  onClick={this.clickBtn}>Good</FeddbackBtn>
          <FeddbackBtn type="button" name="neutral" onClick={this.clickBtn}>Netural</FeddbackBtn>
          <FeddbackBtn type="button" name="bad" onClick={this.clickBtn}>Bad</FeddbackBtn>
        </BtnBlock>
        <section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
        <div>
        <h3>Statistic</h3>
        <ul>
          <li>Good: {this.state.good }</li>
          <li>neutral: {this.state.neutral }</li>
          <li>Bad: {this.state.bad }</li>
          <li>Total: {this.countTotalFeedback()} </li>
          <li>Positive Feedback: {this.countPositiveFeedbackPercentage() ? this.countPositiveFeedbackPercentage() : 0 }  %</li>
        </ul>
            </div>
            
          ): (
            <div message="There is no feedback yet">There is no feedback yet</div>
          )
          }


        </section>
      </Main>
    );
  }
}





