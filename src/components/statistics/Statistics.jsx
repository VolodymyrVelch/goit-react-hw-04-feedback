
import React from "react";
import { StatList, Stats } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad,total, positivePercentage=0})=>{
    return ( <div>
               <StatList>
                 <Stats>Good: {good }</Stats>
                 <Stats>Neutral: {neutral }</Stats>
                 <Stats>Bad: {bad }</Stats>
                 <Stats>Total: {total} </Stats>
                 <Stats>Positive Feedback: {positivePercentage} %</Stats>
               </StatList>
            </div>)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}