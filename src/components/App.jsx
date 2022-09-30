import React from "react";
import { Main } from "./App.styled";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Statistics } from "./statistics/Statistics";
import { Notification } from "./notification/Notification";
import { Section } from "./section/Section";

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
        <Section title="Please leave feedback">
        <FeedbackOptions
        feedback={Object.keys(this.state)}
        feedbackOptions={this.clickBtn}
        />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
          <Statistics
          good={this.state.good} 
          neutral={this.state.neutral}
          bad={this.state.bad} 
          total={this.countTotalFeedback()} 
          positivePercentage={this.countPositiveFeedbackPercentage() ? this.countPositiveFeedbackPercentage() : 0 }/>  
          ): (<Notification message="There is no feedback yet"/>)}
        </Section>
      </Main>
    );
  }
}





