import React from "react";
import { Main,FeddbackBtn,BtnBlock } from "./App.styled";

export class App extends React.Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  clickGoodBtn = () => {
    this.setState(prevState => ({
      good: prevState.good += 1,
    }));
  }
  clickNaturalBtn = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral += 1,
    }));
  }
  clickBadBtn = () => {
    this.setState(prevState => ({
      bad: prevState.bad += 1,
    }));
  }
  
  
  countTotalFeedback() {
    return Object.values(this.state).reduce((a,b )=>a+b)
   }
  countPositiveFeedbackPercentage() { 
    return parseInt((this.state.good/this.countTotalFeedback())*100) 
  };
  
  render() {
    return (
      <Main>
        <h2>Please leave feedback</h2>
        <BtnBlock>
          <FeddbackBtn type="button" onClick={this.clickGoodBtn}>Good</FeddbackBtn>
          <FeddbackBtn type="button" onClick={this.clickNaturalBtn}>Netural</FeddbackBtn>
          <FeddbackBtn type="button" onClick={this.clickBadBtn}>Bad</FeddbackBtn>
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





