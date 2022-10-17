import React, {useState} from "react";
import { Main } from "./App.styled";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Statistics } from "./statistics/Statistics";
import { Notification } from "./notification/Notification";
import { Section } from "./section/Section";



export function App() {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);  

const feedback = ['good', 'neutral', 'bad']

const clickBtn = (e) => {
  switch (e.currentTarget.name) {
        case ("good"):
        setGood(prevState=>prevState+1);
        break;
        case ("bad"):
        setBad(prevState=>prevState+1);
        break;
        case ("neutral"):
        setNeutral(prevState=>prevState+1);
      break;
      default:
      return
    }
  }

const countTotalFeedback= () => bad + good + neutral

const countPositiveFeedbackPercentage= ()=> Math.round((good/countTotalFeedback())*100) 


  return (
      <Main>
        <Section title="Please leave feedback">
        <FeedbackOptions
        feedback={feedback}
        feedbackOptions={clickBtn}
        />
        </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (<Notification message="There is no feedback yet" />)}
        </Section>
      </Main>
    );
} 

