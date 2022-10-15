import React, {useState} from "react";
import { Main } from "./App.styled";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Statistics } from "./statistics/Statistics";
import { Notification } from "./notification/Notification";
import { Section } from "./section/Section";



export function App() {
const [good, setgood] = useState(0);
const [neutral, setneutral] = useState(0);
const [bad, setbad] = useState(0);  
  
const feedback = ['good', 'neutral', 'bad']

const clickBtn = (e) => {
  switch (e.currentTarget.name) {
        case ("good"):
        setgood(prevstate=>prevstate+1);
        break;
        case ("bad"):
        setbad(prevstate=>prevstate+1);
        break;
        case ("neutral"):
        setneutral(prevstate=>prevstate+1);
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

