
import React from "react";
// import { FeddbackBtn,BtnBlock } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad,total, positivePercentage})=>{
    return ( <div>
               <h3>Statistic</h3>
               <ul>
                 <li>Good: {good }</li>
                 <li>neutral: {neutral }</li>
                 <li>Bad: {bad }</li>
                 <li>Total: {total} </li>
                 <li>Positive Feedback: {positivePercentage} %</li>
               </ul>
            </div>)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}